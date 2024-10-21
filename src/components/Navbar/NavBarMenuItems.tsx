import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge, Tooltip } from "@nextui-org/react";
// NextUi Components
import { Button, NavbarItem } from "@nextui-org/react";
// Components
import ProfileButton from "./ProfileButton";
// Icons
// import { GoBell, GoGear } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineContactPage, MdOutlineMenuOpen } from "react-icons/md";
import { RiBellLine, RiNotification3Line, RiWalletLine } from "react-icons/ri";
// Utils
import { cn } from "@/lib/utils";
import { loggedInMenuItems, loggedOutMenuItems } from "./helpers";
import { useEffect, useState } from "react";
import { getUnseenNotificationCount } from "@/lib/novu";
import { GrProjects } from "react-icons/gr";
import GoProModal from "../Payment/GoProModal";
import NotificationDropdown from "./NotificationDropdown";
import { useAppNavigation } from "@/hooks/navigation";

const loggedInMenuIcons = {
  Templates: <MdOutlineMenuOpen />,
  Blog: <MdOutlineContactPage />,
  "My Projects": <GrProjects className="text-sm" />,
  // Wallet: <RiWalletLine />,
  Notifications: <RiNotification3Line />,
};

type TProps = {
  uid?: string;
  photoURL?: string | null;
  displayName?: string | null;
  balance: number;
  logout: () => void;
  isLoggingOut: boolean;
};
export default function NavBarMenuItems(props: TProps) {
  const pathName = usePathname();
  const [unseenNotificationCount, setUnseenNotificationCount] = useState(0);
  const nav = useAppNavigation();
  useEffect(() => {
    if (props.uid) {
      getUnseenNotificationCount(props.uid)
        .then((count) => {
          setUnseenNotificationCount(count || 0);
        })
        .catch((error) => {});
    }
  }, [props.uid]);
  if (!props.uid) {
    return (
      <>
        {loggedOutMenuItems.map((menu) =>
          menu.name !== "Login" ? (
            <NavbarItem
              key={menu.id}
              className={cn("hover:text-avid-accent duration-300", {
                "text-avid-accent": pathName.startsWith(menu.link),
              })}
            >
              <Link href={menu.link}>{menu.name}</Link>
            </NavbarItem>
          ) : (
            <Button
              key={menu.id}
              className="bg-avid-gradient w-fit mt-5 lg:mt-0"
              onPress={() => {
                nav.navigateToLogin();
              }}
            >
              <IoPersonOutline />
              {menu.name + " / Sign Up"}
            </Button>
          )
        )}
      </>
    );
  }

  return (
    <>
      {loggedInMenuItems.map((menu) =>
        !["Wallet", "Notifications"].includes(menu.name) ? (
          <NavbarItem
            key={menu.id}
            className={cn("hover:text-avid-accent duration-300", {
              "text-avid-accent": pathName.startsWith(menu.link),
            })}
          >
            <Link href={menu.link} className="flex items-center gap-1">
              <div className="text-xl">
                {loggedInMenuIcons[menu.name as keyof typeof loggedInMenuIcons]}
              </div>
              {menu.name}
            </Link>
          </NavbarItem>
        ) : menu.name === "Notifications" ? (
          <Badge
            content={unseenNotificationCount}
            color="primary"
            isInvisible={!unseenNotificationCount}
            key={menu.id + "badge"}
          >
            <NavbarItem key={menu.id}>
              <div className="text-xl  flex items-center gap-1 ">
                {props.uid && (
                  <NotificationDropdown uid={props.uid}></NotificationDropdown>
                )}
              </div>
            </NavbarItem>
          </Badge>
        ) : (
          <NavbarItem
            key={menu.id}
            className={cn("hover:text-avid-accent duration-300", {
              "text-avid-accent": pathName.startsWith(menu.link),
            })}
          >
            <Link href={menu.link} className="flex items-center gap-1">
              <div className="text-xl">
                {loggedInMenuIcons[menu.name as keyof typeof loggedInMenuIcons]}
              </div>
              {props.balance}
            </Link>
          </NavbarItem>
        )
      )}
      <NavbarItem>
        {props.uid && <GoProModal userId={props.uid}></GoProModal>}
      </NavbarItem>
      <NavbarItem>
        <ProfileButton
          uid={props.uid}
          photoURL={props.photoURL}
          displayName={props.displayName}
          logout={props.logout}
          isLoggingOut={props.isLoggingOut}
        />
      </NavbarItem>
    </>
  );
}
