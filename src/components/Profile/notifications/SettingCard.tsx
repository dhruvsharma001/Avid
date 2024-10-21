"use client";
import { Switch } from "@nextui-org/react";
// Icons
import { IoNewspaperOutline, IoReloadOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
// Helpers
import { NotificationSetting } from "../helpers";

const settingIconsMap = {
  payment: <MdOutlinePayment />,
  news: <IoNewspaperOutline />,
  general: <IoReloadOutline />,
  promotional: <GrAnnounce />,
};

type TProps = {
  setting: NotificationSetting;
};
export default function SettingCard({ setting }: TProps) {
  return (
    <div className="bg-avid-main-400 rounded-lg p-4 flex justify-between gap-5">
      <div className="text-3xl bg-cyan-900 rounded-full w-12 h-12 grid place-items-center">
        {settingIconsMap[setting.icon as keyof typeof settingIconsMap]}
      </div>
      <div className="flex-1">
        <h5 className="text-lg">{setting.title}</h5>
        <p className="text-avid-gray-300">{setting.description}</p>
      </div>
      <div>
        <Switch defaultSelected color="success" aria-label={setting.title} />
      </div>
    </div>
  );
}
