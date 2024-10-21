import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
// NextUi Components
import { Input } from "@nextui-org/react";
// Components
import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import Titlebar from "../reusables/Titlebar";
import SortButton from "./SortButton";
import FilterButton from "./FilterButton";
// Utils
import { debounce } from "@/lib/utils";
import { TCategory } from "@/models/Categories";

type TProps = {
  sortOption: string;
  setSortOption: (val: string) => void;
  isPriceSelected: boolean;
  setIsPriceSelected: (val: boolean) => void;
  priceRange: number[];
  setPriceRange: (val: number[]) => void;
  premium: boolean;
  setPremium: (val: boolean) => void;
  categories: TCategory[];
  areCategoriesLoading: boolean;
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;
};
export default function TemplateFilter({
  sortOption,
  setSortOption,
  isPriceSelected,
  setIsPriceSelected,
  priceRange,
  setPriceRange,
  premium,
  setPremium,
  categories,
  areCategoriesLoading,
  selectedCategories,
  setSelectedCategories,
}: TProps) {
  const router = useRouter();

  return (
    <MaxWidthWrapper className="py-3 md:py-3">
      <Titlebar title="Template List">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          {/* <Input
            label="Search"
            variant="bordered"
            size="sm"
            onChange={debounce(
              (e: ChangeEvent<HTMLInputElement>) =>
                // router.replace(`?q=${e.target.value}`),
                500
            )}
          /> */}
          <div className="flex gap-3">
            <SortButton sortOption={sortOption} setSortOption={setSortOption} />
            <FilterButton
              isPriceSelected={isPriceSelected}
              setIsPriceSelected={setIsPriceSelected}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              premium={premium}
              setPremium={setPremium}
              categories={categories}
              areCategoriesLoading={areCategoriesLoading}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
        </div>
      </Titlebar>
    </MaxWidthWrapper>
  );
}
