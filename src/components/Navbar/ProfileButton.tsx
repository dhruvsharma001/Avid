import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useAppNavigation } from "@/hooks/navigation";

type TProps = {
  uid?: string;
  photoURL?: string | null;
  displayName?: string | null;
  logout: () => void;
  isLoggingOut: boolean;
};
export default function ProfileButton(props: TProps) {
  const app = useAppNavigation();

  return (
    <Dropdown className="bg-avid-main-400">
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="w-full mt-5 lg:mt-0"
          isLoading={props.isLoggingOut}
        >
          <Avatar src={props.photoURL || ""} size="sm" />
          {props.displayName}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile" onPress={() => app.navigateToProfile()}>
          My Profile
        </DropdownItem>
        <DropdownItem key="videos" onPress={() => app.navigateToMyVideos()}>
          My Exports
        </DropdownItem>
        <DropdownItem key="videos" onPress={() => app.navigateToMyProjects()}>
          My Projects
        </DropdownItem>
        <DropdownItem
          key="videos"
          onPress={() => app.navigateToPage("/profile?tab=notifications")}
        >
          Notifications
        </DropdownItem>

        {/* <DropdownItem key="edit" onPress={() => app.navigateToSettings()}>
          Settings
        </DropdownItem> */}
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          onPress={props.logout}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
