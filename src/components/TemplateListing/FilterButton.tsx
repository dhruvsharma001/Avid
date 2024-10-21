import {
  Button,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Slider,
  Spinner,
} from "@nextui-org/react";
import { FiFilter } from "react-icons/fi";
import { debounce } from "@/lib/utils";
import { TEMPLATES_CONSTANTS } from "@/constants";
import { TCategory } from "@/models/Categories";

type TProps = {
  isPriceSelected: boolean;
  setIsPriceSelected: (val: boolean) => void;
  priceRange: number[];
  setPriceRange: (val: number[]) => void;
  setPremium: (val: boolean) => void;
  premium: boolean;
  categories: TCategory[];
  areCategoriesLoading: boolean;
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;
};
export default function FilterButton({
  isPriceSelected,
  setIsPriceSelected,
  priceRange,
  setPriceRange,
  setPremium,
  premium,
  categories,
  areCategoriesLoading,
  selectedCategories,
  setSelectedCategories,
}: TProps) {
  return (
    <Dropdown className="bg-avid-main-400">
      <DropdownTrigger>
        <Button className="w-full" variant="bordered">
          <FiFilter /> Filter
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" closeOnSelect={false}>
        <DropdownItem key="price">
          <div className="flex flex-col gap-3">
            <Checkbox
              defaultSelected={premium}
              checked={premium}
              onChange={(e) => setPremium(e.target.checked)}
            >
              Premium
            </Checkbox>

            {/* <Checkbox
              defaultSelected={isPriceSelected}
              checked={isPriceSelected}
              onChange={(e) => setIsPriceSelected(e.target.checked)}
            >
              Price
            </Checkbox> */}
            {/* {isPriceSelected && (
              <Slider
                aria-label="Price Range"
                step={TEMPLATES_CONSTANTS.PRICE_SLIDER_STEP}
                minValue={TEMPLATES_CONSTANTS.MIN_PRICE}
                maxValue={TEMPLATES_CONSTANTS.MAX_PRICE}
                defaultValue={priceRange}
                formatOptions={{ style: "currency", currency: "INR" }}
                className="max-w-md"
                size="sm"
                showTooltip
                onChangeEnd={debounce((value: number[]) => {
                  setPriceRange(value);
                }, 1000)}
              />
            )} */}
          </div>
        </DropdownItem>

        <DropdownItem key="categories">
          {areCategoriesLoading ? (
            <Spinner />
          ) : (
            !!selectedCategories?.length && (
              <CheckboxGroup
                label="Categories"
                orientation="horizontal"
                color="primary"
                value={selectedCategories}
                onValueChange={setSelectedCategories}
              >
                {categories?.map((category) => (
                  <Checkbox key={category.name} value={category.name}>
                    {category.name}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            )
          )}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
