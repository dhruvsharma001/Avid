import { useMemo, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaSortAmountUp } from "react-icons/fa";
import { sortOptions } from "./helpers";

type TProps = {
  sortOption: string;
  setSortOption: (val: string) => void;
};
export default function SortButton({ sortOption, setSortOption }: TProps) {
  const [selectedKeys, setSelectedKeys] = useState(new Set([sortOption]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="w-full" color="primary">
          <FaSortAmountUp /> {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        // @ts-ignore TODO: Need to fix type error below
        onSelectionChange={setSelectedKeys}
        onAction={(key) => setSortOption(key as string)}
      >
        {sortOptions.map((option) => (
          <DropdownItem key={option.key}>{option.name}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
