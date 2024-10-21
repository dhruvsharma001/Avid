import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

type Tprops = {
  onSelectionChange: (key: string) => void;
};
export default function AspectRatioDropDown(props: Tprops) {
  const resolutions = [
    "1280 x 720 (16:9)",
    "720 x 540 (4:3)",
    "720 x 720 (1:1)",
    "476 x 720 (4:5)",
    "720 x 1280 (9:16)",
  ];
  const [selected, setSelected] = useState<string>("1280 x 720 (16:9)");
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{selected}</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        onAction={(key) => {
          setSelected(key as string);
          props.onSelectionChange(key as string);
        }}
      >
        {resolutions.map((resolution) => (
          <DropdownItem key={resolution}>{resolution}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
