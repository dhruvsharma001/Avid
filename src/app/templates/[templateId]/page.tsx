"use client";
// Firebase
import firestore from "@/firebase/db";
import { query, where, collection, doc } from "firebase/firestore";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
// Components
import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Titlebar from "@/components/reusables/Titlebar";
import TemplateDetail from "@/components/TemplateDetail";
import Info from "@/components/ui/Info";
// Models
import { FIREBASE_CONSTANTS } from "@/constants";
import { TTemplate } from "@/models/Template";

export default function TemplateDetails({
  params,
}: {
  params: { templateId: string };
}) {
  const [templateSnap, templateSnaploading, templateSnaperror] =
    useDocumentDataOnce(
      doc(
        firestore,
        FIREBASE_CONSTANTS.COLLECTIONS.TEMPLATES,
        params.templateId
      )
    );

  const template = templateSnap as TTemplate;

  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="pt-3 md:pt-3">
          <Titlebar title="Template Detail" showBackButton />
          {templateSnaploading ? (
            <Loader fullPage />
          ) : templateSnaperror ? (
            <Info text={templateSnaperror.message} />
          ) : !templateSnap ? (
            <Info text="No template found" />
          ) : (
            <TemplateDetail
              template={template}
              templateId={params.templateId}
            />
          )}
        </MaxWidthWrapper>
      </main>
    </>
  );
}
