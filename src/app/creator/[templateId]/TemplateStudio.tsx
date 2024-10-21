"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import Info from "@/components/ui/Info";

// Utils
import { DEFAULT_TEMPLATE_PROP } from "@/constants";
// Models
import StudioComponents from "@/components/StudioComponents/Studio/index";
import { nextFetch } from "@/lib/fetch";
import { TTemplate } from "@/models/Template";
import useStudioStore, { StudioState } from "@/stores/studio";

// TODO: Remove them later

type TProps = {
  templateId: string;
};

export default function TemplateStudio(props: TProps) {
  const { templateId } = props;
  const [template, setTemplate] = useState<TTemplate | null>(null);
  const [isTemplateLoading, setTemplateLoading] = useState(false);
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

  async function getTemplate() {
    setTemplateLoading(true);
    if (template) return;
    const resp = await nextFetch(`/api/template?templateId=${templateId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).finally(() => {
      setTemplateLoading(false);
    });
    if (!resp.ok) {
      setTemplate(null);
    }
    const localProject = (await resp.data.data) as TTemplate;
    return localProject;
  }

  useEffect(() => {
    getTemplate()
      .then((localTemplate) => {
        if (!localTemplate) return;

        const ip = localTemplate.props || DEFAULT_TEMPLATE_PROP;
        console.log("localTemplate:", localTemplate);
        console.log("ip:", ip);
        // const inputProp = DEFAULT_TEMPLATE_PROP;
        setInitialClip(ip);
        setActiveClip(ip?.clips[0]?.id);
        setActiveClipIndex(0);
        setTemplate(localTemplate);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (isTemplateLoading) return <Loader fullPage />;
  if (!template || (!template && templateId != "demo"))
    return <Info text="No template found" />;

  return (
    <>
      <StudioComponents />
    </>
  );
}
