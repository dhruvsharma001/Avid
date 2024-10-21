"use client";

import React from "react";

import firestore from "@/firebase/db";
import { collection, doc, query, where } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

import FoF from "@/components/404/404";
import { useUserStore } from "@/stores/user";
import { useStore } from "zustand";

import SimpleTable from "@/components/ui/SimpleTable/SimpleTable";

import { TTemplateWithId } from "@/models/Template";

import { useAppNavigation } from "@/hooks/navigation";
import { nextFetch } from "@/lib/fetch";
import { generateRandomRenderName } from "@/lib/utils";
import { Button, Spinner } from "@nextui-org/react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";

type TProps = {
  userId: string;
};

function TemplateCardArtist(props: TProps) {
  const { userId } = props;
  const nav = useAppNavigation();
  const [creatingNewTemplate, setCreatingNewTemplate] = React.useState(false);
  const [values, loading, error, snapshot] = useCollectionDataOnce(
    query(
      collection(firestore, "templates"),
      where("author", "==", doc(firestore, "users", userId))
    )
  );

  if (loading) return <Spinner label="Loading Templates"></Spinner>;
  if (error) return <FoF text={error.message}></FoF>;
  if (creatingNewTemplate)
    return <Spinner label="Creating New Template"></Spinner>;

  if (values) {
    const templates = values.map((doc, index) => {
      return { ...doc, id: snapshot?.docs[index].id } as TTemplateWithId;
    });

    const onRowClick = (templateId: string | number) => {
      if (templateId) {
        // navigate to template page
        nav.navigateToPage(`/creator/${templateId}`);
      }
    };
    const rows = templates.map((template) => {
      return {
        key: template.id,
        name: template.name,
        listed: template.listed ? "Yes" : "No",
      };
    });

    const columns = [
      { key: "name", label: "Name" },
      { key: "listed", label: "Published" },
    ];

    const createNewTemplate = () => {
      setCreatingNewTemplate(true);
      nextFetch(`/api/template`, {
        method: "POST",
        body: JSON.stringify({
          name: generateRandomRenderName(),
        }),
      })
        .then((res) => {
          toast.success("Template created");
          nav.navigateToPage(`/creator/${res.data.data.id}`);
        })
        .finally(() => {
          setCreatingNewTemplate(false);
        });
    };
    return (
      <div className="w-full ">
        <Button
          variant="ghost"
          color="primary"
          size="sm"
          onClick={createNewTemplate}
        >
          <FaPlus></FaPlus>
        </Button>
        <SimpleTable
          rows={rows}
          columns={columns}
          onRowClick={onRowClick}
        ></SimpleTable>
        {/* <FullTable></FullTable> */}
      </div>
    );
  }
}
function ArtistTemplateListing() {
  const user = useStore(useUserStore, (state) => state.user);
  if (user) return <TemplateCardArtist userId={user.uid}></TemplateCardArtist>;
  return <FoF text="User not found"></FoF>;
}

export default ArtistTemplateListing;
