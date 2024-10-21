import { useRouter, useSearchParams } from "next/navigation";

/**
 * @Example Query
 * ?q=wedding&price=1000-5000&category=invitations,showcase&sort=z-a
 */
export default function useQueryParams() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  const price = searchParams.get("price");
  const minPrice = Number(price?.split("-")[0]);
  const maxPrice = Number(price?.split("-")[1]);

  const category = searchParams.get("category");
  const categoriesArr = category?.split(",") || [];

  const sort = searchParams.get("sort");
  const premium = searchParams.get("premium") === "true";
  return {
    q,
    minPrice,
    maxPrice,
    categoriesArr,
    sort,
    premium,
  };
}
