import { useMemo } from "react";
// Firebase
import { DocumentData, collection, query, where } from "firebase/firestore";
import firestore from "@/firebase/db";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
// NextUi Components
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
// Components
import FoF from "../404/404";
import Loader from "../Loader";
// Icons
import { SlOptions } from "react-icons/sl";
import { PiPencilSimpleLine } from "react-icons/pi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import {
  RiDeleteBinLine,
  RiExternalLinkLine,
  RiFileDownloadLine,
} from "react-icons/ri";
// Utils
import { firebaseDateToLocalString } from "@/lib/datetime";
import { FIREBASE_CONSTANTS } from "@/constants";
import { tableActions, tableClassNames, tableColumns } from "./helpers";
import { TProject } from "@/models/Project";
import { useAppNavigation } from "@/hooks/navigation";
import toast from "react-hot-toast";
const tableActionIcons = {
  Rename: <PiPencilSimpleLine />,
  "Download Invoice": <IoCloudDownloadOutline />,
  "View Video": <RiFileDownloadLine />,
  "Edit Project": <PiPencilSimpleLine />,
  "Go To Template": <RiExternalLinkLine />,
  "Delete Video": <RiDeleteBinLine />,
};

type TProps = {
  userId: string;
};
/* This code snippet defines a React functional component named `RenderList` that takes a single prop
`userId` of type string. Within the component, it fetches data from a Firestore collection based on
the provided `userId` using the `useCollectionDataOnce` hook from `react-firebase-hooks/firestore`. */
export default function ProjectList(props: TProps) {
  const { userId } = props;
  const navigation = useAppNavigation();
  const classNames = useMemo(() => tableClassNames, []);

  //get transactions of user
  const [projects, loading, error] = useCollectionDataOnce(
    query(
      collection(firestore, FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS),
      where("userId", "==", userId)
    )
  );

  if (loading) return <Loader fullPage />;
  if (error) return <div>error {JSON.stringify(error)}</div>;
  if (!projects) return <FoF text="No Project"></FoF>;

  return (
    <>
      <Table
        classNames={classNames}
        onRowAction={(key) => {}}
        radius="sm"
        fullWidth={false}
        aria-label="Renders table"
      >
        <TableHeader>
          {tableColumns.map((column) => (
            <TableColumn key={column.key}>{column.name}</TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent={"No Projects available"}>
          {projects.map((project: DocumentData) => (
            <TableRow
              key={project.id}
              className="border-b border-b-avid-gray-400"
            >
              <TableCell>{project.name || project.id}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>{project.stage}</TableCell>
              <TableCell>
                {firebaseDateToLocalString(project.createdAt)}
              </TableCell>
              <TableCell>
                <div className="relative flex justify-end items-center gap-2">
                  <Dropdown className="">
                    <DropdownTrigger>
                      <Button
                        className="bg-avid-accent"
                        isIconOnly
                        radius="full"
                        size="sm"
                        variant="light"
                        color="primary"
                      >
                        <SlOptions className="text-lg text-white" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      {tableActions.map((action) => (
                        <DropdownItem
                          key={action.id}
                          onPress={() => {
                            if (action.name === "Edit Project") {
                              navigation.navigateToPage(
                                `/studio/${project.id}`
                              );
                            } else if (action.name === "View Video") {
                              navigation.navigateToPage(
                                `/my-exports/${project.id}`
                              );
                            } else if (action.name === "Go To Template") {
                              navigation.navigateToPage(
                                `/templates/${project.templateId}`
                              );
                            } else if (action.name === "Delete Video") {
                              toast.success("Feature not available yet");
                            } else if (action.name === "Download Invoice") {
                              toast.success(
                                "Invoice was sent at time of payment.Contact us at hello@blinkadz.com for more details.",
                                {
                                  duration: 5000,
                                }
                              );
                            }
                          }}
                        >
                          <div className="flex items-center gap-2">
                            {
                              tableActionIcons[
                                action.name as keyof typeof tableActionIcons
                              ]
                            }
                            <span>{action.name}</span>
                          </div>
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
