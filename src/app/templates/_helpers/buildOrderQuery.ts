import { TOrderQuery } from "../page";

export default function buildOrderQuery(sortOption: string): TOrderQuery {
  switch (sortOption) {
    case "oldest":
      return { fieldPath: "createdAt", direction: "asc" };
    case "newest":
      return { fieldPath: "createdAt", direction: "desc" };
    case "a-z":
      return { fieldPath: "name", direction: "asc" };
    case "z-a":
      return { fieldPath: "name", direction: "desc" };
    default:
      return { fieldPath: "created", direction: "desc" };
  }
}
