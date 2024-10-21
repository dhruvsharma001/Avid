import React, { useEffect, useMemo, useState } from "react";
import { RiNotification3Line } from "react-icons/ri";
import {
  Listbox,
  ListboxItem,
  Chip,
  Tooltip,
  Divider,
} from "@nextui-org/react";
import {
  TNovuNotificationFeed,
  getSubscriberInAppNotificationFeed,
} from "@/lib/novu";
import { TNovuInAppNotification } from "@/types";
import moment from "moment";
import { settingIconsMap } from "../Profile/notifications/NotificationCard";
import { useAppNavigation } from "@/hooks/navigation";
type TProps = {
  uid: string;
};
export default function NotificationDropdown(props: TProps) {
  const { uid } = props;
  const [notifications, setNotifications] = useState<TNovuNotificationFeed>();
  const [isOpen, setIsOpen] = useState(false);
  const nav = useAppNavigation();
  const toggleDropdown = () => setIsOpen(!isOpen);

  async function getNotifications(uid: string) {
    if (uid) {
      const notification = await getSubscriberInAppNotificationFeed(uid, {
        limit: 5,
      });
      if (notification && notification?.data && notification.data.length > 0)
        setNotifications(notification);
    }
  }
  useEffect(() => {
    getNotifications(uid);
  }, [uid]);

  const markAllAsRead = () => {
    // mark all notifications as read
  };
  const boxHeader = useMemo(() => {
    return (
      <div className="flex justify-between items-center">
        <div className="text-lg">Notifications</div>
        <Chip color="primary">{notifications?.data.length}</Chip>
        <button
          className="text-small text-default-400 hover:underline"
          onClick={markAllAsRead}
        >
          Mark all as read
        </button>
      </div>
    );
  }, [notifications]);

  return (
    <div className="relative">
      <Tooltip content="Notifications">
        <button
          onClick={toggleDropdown}
          className={isOpen ? " rounded-md bg-zinc-600" : " rounded-md "}
        >
          <RiNotification3Line className="text-2xl " />
        </button>
      </Tooltip>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-zinc-800 shadow-xl rounded-lg w-80 p-4">
          <Listbox
            topContent={boxHeader}
            bottomContent={
              <div
                className="text-center text-small  cursor-pointer hover:underline p-2 pt-4"
                onClick={() => {
                  nav.navigateToProfile("notifications");
                }}
              >
                View all notifications
              </div>
            }
            emptyContent={
              <div className="text-center p-2">No notifications</div>
            }
          >
            {notifications ? (
              notifications.data.map((notification: TNovuInAppNotification) => (
                <ListboxItem
                  key={notification.id}
                  className="hover:bg-zinc-950"
                  showDivider={true}
                  isReadOnly={notification.cta.data.url === ""}
                  onPress={() => {
                    if (
                      notification.cta.data.url &&
                      notification.cta.data.url !== ""
                    )
                      nav.navigateToPage(notification.cta.data.url);
                  }}
                >
                  <div className="flex  items-center">
                    <div className="text-3xl  content-center text-center mr-2">
                      {
                        settingIconsMap[
                          notification.actor
                            .data as keyof typeof settingIconsMap
                        ]
                      }
                    </div>
                    <div className="flex flex-col">
                      <span className="text-small overflow-hidden  max-w-10">
                        {notification.content}
                      </span>
                      <span className="text-tiny text-default-400">
                        {moment(notification.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                </ListboxItem>
              ))
            ) : (
              <div className="text-center p-2">No notifications</div>
            )}
          </Listbox>
        </div>
      )}
    </div>
  );
}
