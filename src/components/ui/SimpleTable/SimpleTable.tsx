import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

type TProps = {
  columns: { key: string; label: string }[];
  rows: { [key: string]: string }[];
  onRowClick: (key: string | number) => void;
};
export default function SimpleTable(props: TProps) {
  const { columns, rows } = props;
  return (
    <Table
      aria-label="Template Listing"
      onRowAction={(key) => props.onRowClick(key)}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow
            key={item.key}
            className="hover:cursor-pointer hover:bg-zinc-950"
          >
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
