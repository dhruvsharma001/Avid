"use client";

import {
  IoCheckboxOutline,
  IoNewspaperOutline,
  IoReloadOutline,
} from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
// Helpers
import { TNotification } from "../helpers";

export const settingIconsMap = {
  warning: <MdOutlinePayment />,
  info: <IoNewspaperOutline />,
  success: <IoCheckboxOutline />,
  question: <GrAnnounce />,
};

type TProps = {
  notification: TNotification;
};
export default function NotificationCard({ notification }: TProps) {
  return (
    <div className="bg-avid-main-400 rounded-lg p-4 flex justify-between gap-5">
      <div className="text-3xl bg-cyan-900 rounded-full w-12 h-12 grid place-items-center">
        {settingIconsMap[notification.icon as keyof typeof settingIconsMap]}
      </div>
      <div className="flex-1">
        <h5 className="text-lg">{notification.title}</h5>
        <p className="text-avid-gray-300">{notification.description}</p>
      </div>
    </div>
  );
}
