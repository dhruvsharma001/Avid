import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "../MaxWidthWrapper";

import Titlebar from "@/components/reusables/Titlebar";
import ProjectGrid from "@/components/MyProjects/ProjectGrid";

export default function MyRenders() {
  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <Titlebar title="My Projects" showBackButton />
          <ProjectGrid />
        </MaxWidthWrapper>
      </main>
    </>
  );
}
