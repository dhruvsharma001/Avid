import SettingCard from "./SettingCard";
import { TNotification, notificationSettings } from "../helpers";
import {
  TNovuNotificationFeed,
  getSubscriberInAppNotificationFeed,
} from "@/lib/novu";
import { useUserStore } from "@/stores/user";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import NotificationCard from "./NotificationCard";
import moment from "moment";
import { Spinner } from "@nextui-org/react";

export default function Notifications() {
  const [notifications, setNotifications] =
    useState<TNovuNotificationFeed | null>(null);
  const user = useUserStore((state) => state.user);
  async function getNotifications() {
    if (user?.uid) {
      const notification = await getSubscriberInAppNotificationFeed(user?.uid, {
        limit: 10,
      });
      if (notification) setNotifications(notification);
    }
  }
  useEffect(() => {
    getNotifications();
  }, [user]);

  return (
    <div className="grid md:grid-cols-12 gap-2 grid-rows-2">
      <div className="flex flex-col gap-3 md:col-span-8">
        {notifications?.data ? (
          notifications?.data.length > 0 ? (
            notifications?.data.map((notification) => {
              const isClickable = notification.cta.data.url !== "";
              const mappedNotification: TNotification = {
                id: notification.id,
                title: notification.content,
                icon: notification.actor.data || "success",
                description: moment(notification.createdAt).fromNow(),
                redirectURL: isClickable
                  ? notification.cta.data.url
                  : undefined,
              };
              return (
                <NotificationCard
                  key={notification._id}
                  notification={mappedNotification}
                />
              );
            })
          ) : (
            <div className="bg-avid-main-400 rounded-lg p-4">
              <h5 className="text-lg">No notifications</h5>
            </div>
          )
        ) : (
          <Spinner label="Loading Notifications"></Spinner>
        )}
      </div>
      <div className="flex flex-col gap-3 md:col-span-4">
        {notificationSettings.map((setting) => (
          <SettingCard key={setting.id} setting={setting} />
        ))}
      </div>
    </div>
  );
}
