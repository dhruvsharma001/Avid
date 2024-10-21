"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import Info from "../ui/Info";

// Utils
import { DEFAULT_TEMPLATE_PROP } from "@/constants";
// Models
import { TProject } from "@/models/Project";
import Studio from "./Studio";
import useStudioStore, { StudioState } from "@/stores/studio";
import { nextFetch } from "@/lib/fetch";

// TODO: Remove them later

type TProps = {
  projectId: string;
};

export default function StudioComponents(props: TProps) {
  const { projectId } = props;
  const [project, setProject] = useState<TProject | null>(null);
  const [isProjectLoading, setProjectLoading] = useState(false);
  //Studio Store states
  const setInitialClip = useStudioStore(
    (state: StudioState) => state.setInitialClip
  );
  const setActiveClip = useStudioStore(
    (state: StudioState) => state.setActiveClip
  );
  const setActiveClipIndex = useStudioStore(
    (state: StudioState) => state.setActiveClipIndex
  );

  async function getProject() {
    setProjectLoading(true);
    if (project) return;
    const resp = await nextFetch(`/api/project?projectId=${projectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).finally(() => {
      setProjectLoading(false);
    });
    if (!resp.ok) {
      setProject(null);
    }
    const localProject = (await resp.data.data) as TProject;
    return localProject;
  }

  useEffect(() => {
    getProject()
      .then((project) => {
        // debugger;
        if (!project) return;
        setProject(project);
        const inputProp = project.props || DEFAULT_TEMPLATE_PROP;

        // const inputProp = DEFAULT_TEMPLATE_PROP;
        setInitialClip(inputProp);
        setActiveClip(inputProp?.clips[0]?.id);
        setActiveClipIndex(0);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (isProjectLoading) return <Loader fullPage />;
  if (projectId && !project && projectId != "demo")
    return <Info text="No project found" />;

  return (
    <>
      <Studio />
    </>
  );
}
