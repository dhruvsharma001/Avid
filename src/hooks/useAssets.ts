import { TWhereQuery } from "@/app/templates/page";
import { TAssetCategory } from "@/models/Asset";
import { useUserStore } from "@/stores/user";
import { WhereFilterOp } from "firebase/firestore";

import firestore from "@/firebase/db";
import { collection, limit, query, where } from "firebase/firestore";
import { useMemo } from "react";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

export function useAssets(
    type: TAssetCategory,
    id?: string,
    userOnly?: boolean // if true, fetch only the assets of the current user
) {
    const userId = useUserStore((state) => state.user?.uid);


    // add memoization for where query

    //if id is provided, fetch the asset with that id or else fetch all assets of that type
    const getWhereQuery = (type: TAssetCategory, id?: string, userOnly?: boolean, userId?: string) => {
        let query: TWhereQuery[] = [{ fieldPath: 'category', queryOperator: '==' as WhereFilterOp, value: type }];
        if (id) {
            query.push({ fieldPath: 'id', queryOperator: '==' as WhereFilterOp, value: id });
        }
        if (userOnly && userId) {
            query.push({ fieldPath: 'owner', queryOperator: '==' as WhereFilterOp, value: userId });
        }
        return query;
    }

    const whereQuery = useMemo(() => getWhereQuery(type, id, userOnly, userId), [type, id, userOnly, userId]);
    const consturctedWhereQuery = whereQuery.map((curr: {
        fieldPath: string,
        queryOperator: WhereFilterOp,
        value: any
    }) => {
        return where(curr.fieldPath, curr.queryOperator, curr.value)
    }, [])
    const [values, loading, error] = useCollectionDataOnce(
        query(
            collection(firestore, "assets"),
            ...consturctedWhereQuery,
            limit(10)
        )
    );



    return { values, loading, error };
}