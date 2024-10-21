import { TOrderQuery, TWhereQuery } from "@/app/templates/page";
import firestore from "@/firebase/db";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export function usePaginatedQuery(
  collectionName: string,
  queryLimit = 10,
  _orderQuery: TOrderQuery[],
  _whereQuery: TWhereQuery[]
) {

  const orderQuery: TOrderQuery[] = useMemo(() => _orderQuery, [_orderQuery]);
  const whereQuery: TWhereQuery[] = useMemo(() => _whereQuery, [_whereQuery]);

  const [docs, setDocs] = useState<DocumentData[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedDocument, setLastFetchedDocument] =
    useState<QueryDocumentSnapshot>();
  const [areMoreDataAvailable, setAreMoreDataAvailable] = useState(false);

  const collectionRef = useMemo(
    () => collection(firestore, collectionName),
    [collectionName]
  );

  const fetchData = useCallback(
    async (
      collectionName: string,
      orderQuery: TOrderQuery[],
      whereQuery?: TWhereQuery[],
      lastDoc?: QueryDocumentSnapshot
    ) => {
      let q = query(
        collection(firestore, collectionName),
        ...orderQuery.map((qr) => orderBy(qr.fieldPath, qr.direction)),
        limit(queryLimit + 1)
      );

      if (lastDoc) {

        if (whereQuery) {
          q = query(
            collectionRef,
            ...whereQuery.map((qr) =>
              where(qr.fieldPath, qr.queryOperator, qr.value)
            ),
            ...orderQuery.map((qr) => orderBy(qr.fieldPath, qr.direction)),
            startAfter(lastDoc),
            limit(queryLimit + 1)
          );
        } else {
          q = query(
            collection(firestore, collectionName),
            ...orderQuery.map((qr) => orderBy(qr.fieldPath, qr.direction)),
            startAfter(lastDoc),
            limit(queryLimit + 1)
          );
        }
      } else {
        if (whereQuery) {

          q = query(
            collectionRef,
            ...whereQuery.map((qr) =>
              where(qr.fieldPath, qr.queryOperator, qr.value)
            ),
            ...orderQuery.map((qr) => orderBy(qr.fieldPath, qr.direction)),
            limit(queryLimit + 1)
          );
        }
      }

      const querySnapshot = await getDocs(q);

      const docs: SetStateAction<DocumentData[]> | { id: string }[] = [];
      querySnapshot.forEach((doc) => {
        docs.push({
          id: doc.id,
          ...doc.data(),
        });
      });


      const lastFetchedDoc =
        querySnapshot?.docs[
        querySnapshot.docs.length > 1 ? querySnapshot.docs.length - 2 : 0
        ];
      const areMoreDataAvailable = querySnapshot.docs.length > queryLimit;

      return {
        data: areMoreDataAvailable ? docs.slice(0, -1) : docs,
        lastFetchedDoc,
        areMoreDataAvailable,
      };
    },
    [collectionRef, queryLimit]
  );

  useEffect(() => {
    (async () => {
      setError(null);

      try {
        const { data, lastFetchedDoc, areMoreDataAvailable } = await fetchData(
          collectionName,
          orderQuery,
          whereQuery
        );

        setDocs(data);
        setLastFetchedDocument(lastFetchedDoc);
        setAreMoreDataAvailable(areMoreDataAvailable);
      } catch (error: any) {

        console.error(
          `Error while getting docs from collection: ${collectionName}: `,
          error
        );

        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [collectionName, queryLimit, orderQuery, whereQuery, fetchData]);

  const loadMoreDocs = async () => {
    try {
      const { data, lastFetchedDoc, areMoreDataAvailable } = await fetchData(
        collectionName,
        orderQuery,
        whereQuery,
        lastFetchedDocument
      );

      const updatedDocs = [...docs, ...data];
      const uniqueData = Array.from(
        new Map(updatedDocs.map((item) => [item["id"], item])).values()
      );

      setDocs(uniqueData);

      setLastFetchedDocument(lastFetchedDoc);
      setAreMoreDataAvailable(areMoreDataAvailable);
    } catch (error: any) {
      console.error(
        `Error while loading more docs from collection: ${collectionName}: `,
        error
      );

      setError;
    } finally {
      setLoading(false);
    }
  };

  return {
    docs,
    areMoreDataAvailable,
    loadMoreDocs,
    loading,
    error,
  };
}
