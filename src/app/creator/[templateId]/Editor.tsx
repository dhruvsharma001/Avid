import React, { useEffect } from "react";
import firestore from "@/firebase/db";
import { query, collection, where, doc } from "firebase/firestore";
import {
  useCollectionDataOnce,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore";
import { useUserStore } from "@/stores/user";
import { useStore } from "zustand";
import RemotionPlayer from "@/components/TemplateComposer/RemotionPlayer";

import {
  JsonView,
  allExpanded,
  collapseAllNested,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { Button, Textarea } from "@nextui-org/react";
import { nextFetch } from "@/lib/fetch";
import toast from "react-hot-toast";
import EditorUploader from "./EditorUploader";
import AspectRatioDropDown from "./AspectRatioDropDown";
import { FIREBASE_CONSTANTS } from "@/constants";

type TProps = {
  templateId: string;
};
function Editor(props: TProps) {
  const { templateId } = props;
  const user = useStore(useUserStore, (state) => state.user);
  const [playerWidth, setPlayerWidth] = React.useState(1280);
  const [playerHeight, setPlayerHeight] = React.useState(720);
  const [size, setSize] = React.useState({ width: 1280, height: 720 });

  const [inputProps, setInputProps] = React.useState();
  const [modifiedInputProps, setModifiedInputProps] = React.useState();
  const [actionLoading, setActionLoading] = React.useState(false);
  const editorRef = React.useRef<HTMLTextAreaElement>(null);
  const [template, loading, error] = useDocumentDataOnce(
    doc(firestore, FIREBASE_CONSTANTS.COLLECTIONS.TEMPLATES, templateId)
  );

  useEffect(() => {
    if (template) setInputProps(template.props);
  }, [template]);

  useEffect(() => {
    console.log(playerWidth, playerHeight);
    setSize({ width: playerWidth, height: playerHeight });
  }, [playerWidth, playerHeight]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!template) return <div>Template not found</div>;

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-row gap-4">
        <Button
          variant="ghost"
          color="primary"
          disabled={actionLoading}
          onClick={async () => {
            setActionLoading(true);
            const resp = await nextFetch(`/api/template`, {
              method: "PATCH",
              body: JSON.stringify({
                id: templateId,
                props: modifiedInputProps,
                name: template.name,
              }),
            });

            if (resp.ok) toast.success("Template updated successfully");
            else toast.error("Failed to update template");
            setActionLoading(false);
          }}
        >
          {" "}
          Save
        </Button>
        <EditorUploader templateId={templateId} />
        <AspectRatioDropDown
          onSelectionChange={(key: string) => {
            // change aspect ratio

            const width = parseInt(key.split(" ")[0]);
            const height = parseInt(key.split(" ")[2]);
            setPlayerWidth(width);
            setPlayerHeight(height);
          }}
        />
      </div>
      <div className="flex flex-row">
        <div className="max-w-[1280px] overflow-auto">
          <RemotionPlayer
            inputProps={inputProps}
            size={size}
            options={{ controls: true }}
          />
        </div>

        <div className="max-h-screen w-1/2 gap-4 overflow-auto">
          <Textarea
            ref={editorRef}
            value={JSON.stringify(modifiedInputProps || inputProps)}
            placeholder="Enter JSON props"
            rows={20}
            onValueChange={(val) => {
              try {
                JSON.parse(val);
                setModifiedInputProps(JSON.parse(val));
              } catch (e) {
                return toast.error("Invalid JSON");
              }
            }}
            className="h-[26]"
          ></Textarea>
          <Button
            onClick={() => {
              const json = editorRef.current?.value;
              if (!json) return toast.error("NO JSON");
              try {
                const parsed = JSON.parse(json);
                setInputProps(parsed);
                toast.success("Props updated");
              } catch (e) {
                toast.error("Invalid JSON");
              }
            }}
          >
            Update Props
          </Button>
          {(modifiedInputProps || inputProps) && (
            <JsonView
              data={
                modifiedInputProps
                  ? modifiedInputProps
                  : inputProps
                  ? inputProps
                  : {}
              }
              shouldExpandNode={collapseAllNested}
              style={darkStyles}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Editor;
