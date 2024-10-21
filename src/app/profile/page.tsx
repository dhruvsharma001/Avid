"use client";
import { useSearchParams } from "next/navigation";
// Hooks
import { useStore } from "zustand";
import { useUserStore } from "@/stores/user";
// NextUi Components
import { Tabs, Tab } from "@nextui-org/react";
// Components
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Titlebar from "@/components/reusables/Titlebar";
import MyProfile from "@/components/Profile/my-profile";
import Notifications from "@/components/Profile/notifications";
import Automations from "@/components/Profile/Automations";

export default function Profile() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "my-profile";

  const user = useStore(useUserStore, (state) => state.user);

  const tabs = {
    "my-profile": {
      key: "my-profile",
      title: "My Profile",
      content: user && <MyProfile />,
    },
    notifications: {
      key: "notifications",
      title: "Notifications",
      content: <Notifications />,
    },
    automations: {
      key: "automations",
      title: "Automations",
      content: <Automations />,
    },
  };

  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="min-h-screen bg-avid-main-500">
        <MaxWidthWrapper className="pt-3 md:pt-3">
          <Titlebar title="My Account" />

          <section className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              variant="underlined"
              defaultSelectedKey={tab}
              classNames={{
                tabList:
                  "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-avid-accent",
                tab: "max-w-fit px-0 h-12",
                tabContent: "group-data-[selected=true]:text-avid-accent",
              }}
            >
              {Object.entries(tabs).map(([key, val]) => (
                <Tab key={key} title={val.title}>
                  {user && val.content}
                </Tab>
              ))}
            </Tabs>
          </section>
        </MaxWidthWrapper>
      </main>
    </>
  );
}
