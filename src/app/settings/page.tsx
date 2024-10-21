import MaxWidthWrapper from "../MaxWidthWrapper";
import Titlebar from "@/components/reusables/Titlebar";
import { Navbar } from "@nextui-org/react";

export default function page() {
  return (
    <div>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <Titlebar title="Settings" />
          <p>Settings</p>
        </MaxWidthWrapper>
      </main>
    </div>
  );
}
