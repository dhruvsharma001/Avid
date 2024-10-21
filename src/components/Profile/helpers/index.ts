export type NotificationSetting = {
  id: number;
  icon: string;
  title: string;
  description: string;
};
export type TNotification = {
  id: string;
  icon: string;
  title: string;
  description?: string;
  redirectURL?: string;
};
;
export const notificationSettings: NotificationSetting[] = [
  // {
  //   id: 0,
  //   icon: "payment",
  //   title: "Payment and transaction",
  //   description:
  //     "",
  // },
  {
    id: 1,
    icon: "news",
    title: "News and app updates",
    description:
      "Get notified when there are new updates or news about the app.",
  },
  // {
  //   id: 2,
  //   icon: "general",
  //   title: "General message",
  //   description:
  //     "Lorem ipsum dolor sit amet nunc fringilla taciti nullam suspendisse sit laoreet himenaeos morbi nisl fusce diam quis porta at lorem est augue conubia vivamus",
  // },
  {
    id: 3,
    icon: "promotional",
    title: "Promotional message",
    description:
      "Get notified when there are exclusive offers and promotions.",
  },
];
