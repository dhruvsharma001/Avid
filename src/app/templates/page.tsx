"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// Firebase
import {
  OrderByDirection,
  QueryConstraint,
  WhereFilterOp,
  collection,
  query,
} from "firebase/firestore";
import firestore from "@/firebase/db";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
// Hooks
import { usePaginatedQuery } from "@/hooks/usePaginatedQuery";
import { usePageBottom } from "@/hooks/usePageBottom";
// Components
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import TemplateListing from "@/components/TemplateListing";
import TemplateFilter from "@/components/TemplateListing/TemplateFilter";
import Info from "@/components/ui/Info";
// Utils
import { FIREBASE_CONSTANTS, TEMPLATES_CONSTANTS } from "@/constants";
import { TTemplate, TTemplateWithId } from "@/models/Template";
import { TCategory } from "@/models/Categories";
import useQueryParams from "./_hooks/useQueryParams";
import useBuildQueries from "./_hooks/useBuildQueries";

export type TWhereQuery = {
  fieldPath: string;
  queryOperator: WhereFilterOp;
  value: string | number | string[] | QueryConstraint | boolean;
};
export type TOrderQuery = {
  fieldPath: string;
  direction: OrderByDirection;
};

export default function Templates() {
  const { sort, minPrice, maxPrice, categoriesArr, premium } = useQueryParams();

  const [sortOption, setSortOption] = useState(
    sort || TEMPLATES_CONSTANTS.DEFAULT_SORT_OPTION
  );
  const [isPriceSelected, setIsPriceSelected] = useState(
    minPrice && maxPrice ? true : false
  );
  const [priceRange, setPriceRange] = useState(
    minPrice && maxPrice
      ? [minPrice, maxPrice]
      : TEMPLATES_CONSTANTS.DEFAULT_PRICE_RANGE
  );
  const [isPremium, setIsPremium] = useState(premium || false);

  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(categoriesArr);

  const { orderQuery, whereQuery } = useBuildQueries(
    sortOption,
    isPriceSelected,
    priceRange,
    selectedCategories,
    isPremium
  );

  const {
    docs: templates,
    areMoreDataAvailable: areMoreTemplatesAvailable,
    loadMoreDocs: loadMoreTemplates,
    loading,
    error,
  } = usePaginatedQuery(
    FIREBASE_CONSTANTS.COLLECTIONS.TEMPLATES,
    FIREBASE_CONSTANTS.QUERY_LIMIT,
    orderQuery,
    whereQuery
  );

  // Fetch categories to use in filter button
  const [categories, areCategoriesLoading, categoriesError] =
    useCollectionDataOnce(
      query(collection(firestore, FIREBASE_CONSTANTS.COLLECTIONS.CATEGORIES))
    );

  useEffect(() => {
    if (!categoriesError) return;

    toast.error(categoriesError.message);
  }, [categoriesError]);

  // Load more templates if scrolled to page bottom
  const { reachedBottom, setReachedBottom } = usePageBottom();

  if (reachedBottom && areMoreTemplatesAvailable) {
    loadMoreTemplates();
    setReachedBottom(false);
  }

  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <TemplateFilter
          sortOption={sortOption}
          setSortOption={setSortOption}
          isPriceSelected={isPriceSelected}
          setIsPriceSelected={setIsPriceSelected}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          premium={isPremium}
          setPremium={setIsPremium}
          categories={categories as TCategory[]}
          areCategoriesLoading={areCategoriesLoading}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        {loading ? (
          <Loader />
        ) : error ? (
          <Info text={error} />
        ) : !templates.length ? (
          <Info text="No templates available" />
        ) : (
          <TemplateListing templates={templates as TTemplateWithId[]} />
        )}
      </main>
    </>
  );
}
