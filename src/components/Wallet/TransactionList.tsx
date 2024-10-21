import { useEffect, useMemo } from "react";
import toast from "react-hot-toast";
// Firebase
import { collection, query, where } from "firebase/firestore";
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
  Chip,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
// Components
import Loader from "../Loader";
// Icons
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
// Utils
import { firebaseDateToLocalString } from "@/lib/datetime";
import { FIREBASE_CONSTANTS } from "@/constants";
import {
  statusColorMap,
  tableActions,
  tableClassNames,
  tableColumns,
} from "./helpers";
import { getPriceString } from "@/lib/utils";

const tableActionIcons = {
  "Download Invoice": <IoCloudDownloadOutline />,
  "Raise Dispute": <RiMessage2Line />,
};

type TProps = {
  userId: string;
};
function TransactionList(props: TProps) {
  const { userId } = props;

  const classNames: any = useMemo(() => tableClassNames, []);

  const [transactions, loading, error] = useCollectionDataOnce(
    query(
      collection(firestore, FIREBASE_CONSTANTS.COLLECTIONS.TRANSACTIONS),
      where("userId", "==", userId)
    )
  );

  useEffect(() => {
    if (!error) return;

    toast.error(error.message);
  }, [error]);

  function openTransactionDetails(key: any) {
    // Open transaction details
  }

  return (
    <>
      <h3 className="text-lg mt-5 mb-3 md:font-semibold duration-300">
        Transaction List
      </h3>
      {loading ? (
        <Loader />
      ) : !transactions ? (
        <h6 className="text-avid-gray-300 md:text-lg">
          No transactions available
        </h6>
      ) : (
        <Table
          classNames={classNames}
          onRowAction={(key) => {
            openTransactionDetails(key);
          }}
          radius="sm"
          fullWidth={false}
          aria-label="Transactions table"
        >
          <TableHeader>
            {tableColumns.map((column) => (
              <TableColumn key={column.key}>{column.name}</TableColumn>
            ))}
          </TableHeader>
          <TableBody emptyContent={"No Transactions available"}>
            {transactions.map((transaction) => (
              <TableRow
                key={transaction.id}
                className="border-b border-b-avid-gray-400"
              >
                <TableCell>{getPriceString(transaction.amount)}</TableCell>
                <TableCell>
                  <Tooltip content={transaction.type}>
                    {transaction.type == "credit" ? (
                      <FaArrowDown className="text-green-500 text-lg" />
                    ) : (
                      <FaArrowUp className="text-red-500 text-lg" />
                    )}
                  </Tooltip>
                </TableCell>
                <TableCell>
                  {getPriceString(transaction.walletBalance)}
                </TableCell>
                <TableCell>
                  <Chip
                    className="capitalize"
                    color={
                      statusColorMap[
                        transaction.status as keyof typeof statusColorMap
                      ] as any
                    }
                    size="sm"
                    variant="flat"
                  >
                    {transaction.status}
                  </Chip>
                </TableCell>
                <TableCell>
                  {firebaseDateToLocalString(transaction.createdAt)}
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
                          <DropdownItem key={action.id}>
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
      )}
    </>
  );
}

export default TransactionList;
