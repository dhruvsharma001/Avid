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
    name: "Video Name",
    key: "video-name",
  },
  {
    id: 1,
    name: "Status",
    key: "status",
  },
  {
    id: 2,
    name: "Stage",
    key: "stage",
  },
  {
    id: 3,
    name: "Created at",
    key: "created-at",
  },
  {
    id: 4,
    name: "Action",
    key: "action",
  },
];

export const tableActions = [
  {
    id: 0,
    name: "Rename",
  },
  {
    id: 5,
    name: "Edit Project",
  },

  {
    id: 1,
    name: "Download Invoice",
  },
  {
    id: 2,
    name: "View Video",
  },
  {
    id: 3,
    name: "Go To Template",
  },
  {
    id: 4,
    name: "Delete Video",
  },
];
