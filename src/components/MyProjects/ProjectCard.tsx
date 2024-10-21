import Image from "next/image";
import { useAppNavigation } from "@/hooks/navigation";
import { Spinner } from "@nextui-org/react";

import { storage } from "@/firebase/firebase";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { ref as storageRef } from "firebase/storage";

import { TProject } from "@/models/Project";
import RemotionPlayer from "../TemplateComposer/RemotionPlayer";

import { CiMenuKebab } from "react-icons/ci";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { deleteProject, duplicateProject } from "./helpers/utils";

import toast from "react-hot-toast";

type TProps = {
  project: TProject;
};
export function CardImageElement({ path, alt }: { path: string; alt: string }) {
  return (
    <Image className="rounded-xl" src={path} fill objectFit="cover" alt={alt} />
  );
}
export function CardImage({ path, alt }: { path: string; alt: string }) {
  const [value, loading, error] = useDownloadURL(storageRef(storage, path));
  if (loading)
    return (
      <div className="w-full h-full grid place-items-center">
        <Spinner />
      </div>
    );
  if (error) return <div>error {error.message}</div>;

  return CardImageElement({ path: value as unknown as string, alt });
}

export default function ProjectCard(props: TProps) {
  const { project } = props;
  const { navigateToPage } = useAppNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleListBox = () => {
    setMenuOpen((prev) => !prev);
  };
  // if the showMore is true, and user clicks outside the dropdown, close the dropdown

  useEffect(() => {
    const closeDropdown = (ev: MouseEvent) => {
      //get id of the clicked element
      const target = ev.target as HTMLElement;
      if (target.id && target.id === "menu-button") return;
      else setMenuOpen(false);
    };
    // add event listener to close dropdown when clicked outside
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  // trim clips to only include first clip
  if (project.props.clips.length > 1)
    project.props.clips = [project.props.clips[0]];

  const onMenuSelect = async (key: string) => {
    switch (key) {
      case "edit":
        navigateToPage(`/studio/${project.id}`);
        break;
      case "duplicate":
        setLoading(true);
        const projectId = duplicateProject(project.id, project.name);
        toast.promise(projectId, {
          loading: "Duplicating project",
          success: (id) => {
            navigateToPage(`/studio/${id}`);
            return "Project duplicated";
          },
          error: "Error duplicating project",
        });
        setLoading(false);

        break;
      case "rename":
        navigateToPage(`/studio/${project.id}`);
        break;
      case "delete":
        setLoading(true);
        const result = deleteProject(project.id);
        toast.promise(result, {
          loading: "Deleting project",
          success: "Project deleted",
          error: "Error deleting project",
        });
        setLoading(false);

        break;
      default:
        break;
    }
  };

  return (
    <div className="rounded-xl p-[1px] hover:bg-avid-gradient duration-300">
      <div className="relative bg-avid-main-400 p-3 rounded-xl  group cursor-pointer">
        <div
          className="relative w-full h-full"
          onClick={() => {
            navigateToPage(`/studio/${project.id}`);
          }}
        >
          {
            <RemotionPlayer
              inputProps={project.props}
              size={{ width: 420, height: 240 }}
              options={{
                controls: false,
                initiallyMuted: true,
                autoplay: false,
              }}
            />
          }

          <div className="absolute w-full h-full top-0 left-0 rounded-xl bg-black/40" />
        </div>
        <div className="p-6 absolute bottom-0 left-0 w-full ">
          <div className="w-full  flex flex-row justify-between">
            <div className="flex justify-between flex-row">
              <span>
                {project.name.length < 16
                  ? project.name
                  : project.name.slice(0, 16) + ".."}
              </span>

              {loading && <Spinner label="Loading..."></Spinner>}
            </div>
            <div className="z-10">
              <CiMenuKebab
                className="mr-4  text-lg hover:bg-avid-main-500  rounded-full cursor-pointer"
                onClick={() => toggleListBox()}
                id="menu-button"
              />
              <div
                className={cn(
                  "w-full max-w-[260px] border-small relative px-1 py-2 rounded-small  border-default-200 dark:border-default-100  z-10 bg-zinc-900",
                  {
                    hidden: !menuOpen,
                  }
                )}
              >
                <Listbox
                  aria-label="Actions"
                  onAction={(key) => onMenuSelect(key as string)}
                  disabledKeys={
                    loading ? ["duplicate", "edit", "rename", "delete"] : []
                  }
                >
                  <ListboxItem key="edit">Edit</ListboxItem>
                  <ListboxItem key="duplicate">Duplicate</ListboxItem>
                  <ListboxItem key="rename">Rename</ListboxItem>
                  <ListboxItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete
                  </ListboxItem>
                </Listbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
