import { useMemo, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { TTicketUrgency } from "@/models/Ticket";
import { UseFormResetField } from "react-hook-form";
import { CustomDevelopmentSchemaType } from "../schemas";

type TProps = {
  urgency: TTicketUrgency;
  resetField: UseFormResetField<CustomDevelopmentSchemaType>;
};
export default function UrgencyDropdown({ urgency, resetField }: TProps) {
  const [selectedKeys, setSelectedKeys] = useState(new Set([urgency]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <Dropdown className="bg-avid-main-400">
      <DropdownTrigger>
        <Button variant="bordered" className="w-full">
          Urgency : {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        // @ts-ignore TODO: Need to fix type error below
        onSelectionChange={setSelectedKeys}
        // @ts-ignore TODO: Need to fix type error below
        onAction={(key) => resetField(undefined, { urgency: key as string })}
      >
        <DropdownItem key="Low">Low</DropdownItem>
        <DropdownItem key="Medium">Medium</DropdownItem>
        <DropdownItem key="High">High</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
