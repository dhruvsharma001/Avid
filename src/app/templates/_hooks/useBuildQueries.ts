import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import buildOrderQuery from "../_helpers/buildOrderQuery";
import { TOrderQuery, TWhereQuery } from "../page";

export default function useBuildQueries(
  sortOption: string,
  isPriceSelected: boolean,
  priceRange: number[],
  selectedCategories: string[],
  premium: boolean
) {
  const router = useRouter();

  const [orderQuery, setOrderQuery] = useState<TOrderQuery[]>([]);
  const [whereQuery, setWhereQuery] = useState<TWhereQuery[]>([]);

  useEffect(() => {
    setOrderQuery([buildOrderQuery(sortOption)]);

    if (isPriceSelected) {
      setOrderQuery((prev) => [
        { fieldPath: "price", direction: "asc" },
        ...prev,
      ]);

      const minPriceQuery: TWhereQuery = {
        fieldPath: "price",
        queryOperator: ">=",
        value: priceRange[0],
      };

      const maxPriceQuery: TWhereQuery = {
        fieldPath: "price",
        queryOperator: "<=",
        value: priceRange[1],
      };

      setWhereQuery([minPriceQuery, maxPriceQuery]);
    }

    if (selectedCategories.length) {
      const categoryQuery: TWhereQuery = {
        fieldPath: "category",
        queryOperator: "in",
        value: selectedCategories,
      };
      setWhereQuery((prev) => [...prev, categoryQuery]);
    }
    if (premium) {

      const premiumQuery: TWhereQuery = {
        fieldPath: "isPremium",
        queryOperator: "==",
        value: premium,
      };
      setWhereQuery((prev) => [...prev, premiumQuery]);
    }

  }, [sortOption, isPriceSelected, priceRange, selectedCategories, premium]);

  useEffect(() => {
    const params: { [key: string]: string } = {};

    if (isPriceSelected) {
      params.price = `${priceRange[0]}-${priceRange[1]}`;
    }

    if (selectedCategories.length) {
      params.category = selectedCategories.join("-");
    }

    if (premium) {
      params.premium = premium.toString();
    }
    params.sort = sortOption;

    const queryParams = new URLSearchParams(params).toString();

    router.push(`?${queryParams}`);
  }, [isPriceSelected, priceRange, router, selectedCategories, sortOption, premium]);

  return { orderQuery, whereQuery };
}
