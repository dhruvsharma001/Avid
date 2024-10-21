"use client";

import Navbar from "@/components/Navbar";
import TemplateStudio from "./TemplateStudio";

function page({ params }: { params: { templateId: string } }) {
  const { templateId } = params;

  if (!templateId) return <div>Template not found</div>;

  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <TemplateStudio templateId={templateId}></TemplateStudio>
      </main>
    </>
  );
}

export default page;
