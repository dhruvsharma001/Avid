export const tableClassNames = {
  wrapper: [
    "border border-avid-gray-200",
    "p-0 min-h-[300px]",
    "bg-transparent",
  ],
  th: ["bg-avid-gray-200"],
  td: [
    // changing the rows border radius
    // first
    "group-data-[first=true]:first:before:rounded-none",
    "group-data-[first=true]:last:before:rounded-none",
    // middle
    "group-data-[middle=true]:before:rounded-none",
    // last
    "group-data-[last=true]:first:before:rounded-none",
    "group-data-[last=true]:last:before:rounded-none",
  ],
};

export const tableColumns = [
  {
    id: 0,
    name: "Amount",
    key: "amount",
  },
  {
    id: 1,
    name: "Type",
    key: "type",
  },
  {
    id: 2,
    name: "Balance",
    key: "balance",
  },
  {
    id: 3,
    name: "Status",
    key: "status",
  },
  {
    id: 4,
    name: "Time",
    key: "time",
  },
  {
    id: 5,
    name: "Action",
    key: "action",
  },
];

export const tableActions = [
  {
    id: 0,
    name: "Download Invoice",
  },
  {
    id: 1,
    name: "Raise Dispute",
  },
];

export const statusColorMap = {
  pending: "warning",
  completed: "success",
  failed: "danger",
};
