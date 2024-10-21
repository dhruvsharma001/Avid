import { Divider } from "@nextui-org/react";
import { RiWalletLine } from "react-icons/ri";

type TProps = {
  balance: number;
};
function BalanceCard(props: TProps) {
  return (
    <>
      <div className="flex items-center gap-5 md:gap-7 duration-300">
        <div className="bg-avid-accent w-14 h-14 md:w-24 md:h-24 rounded-full grid place-items-center duration-300">
          <RiWalletLine className="text-4xl md:text-5xl duration-300" />
        </div>
        <div>
          <h6 className="text-avid-gray-300 md:text-lg">Available Balance</h6>
          <h3 className="text-2xl md:text-4xl font-semibold">
            {props.balance}
          </h3>
        </div>
      </div>
      <Divider className="mt-3" />
    </>
  );
}

export default BalanceCard;
