import React from "react";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Titlebar from "@/components/reusables/Titlebar";
import ExportList from "@/components/MyExports";

function page() {
  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <Titlebar title="Export List" />
          <ExportList />
        </MaxWidthWrapper>
      </main>
    </>
  );
}

export default page;
