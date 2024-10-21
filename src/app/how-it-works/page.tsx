import SelectTemplateSection from "@/components/Home/SelectTemplateSection";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Titlebar from "@/components/reusables/Titlebar";
import { Navbar } from "@nextui-org/react";
import EnterValuesSection from "@/components/Home/EnterValuesSection";
import PayNowSection from "@/components/Home/PayNowSection";

export default function page() {
  return (
    <div>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <Titlebar title="Settings" />
          <SelectTemplateSection />
          <EnterValuesSection />
          <PayNowSection />
        </MaxWidthWrapper>
      </main>
    </div>
  );
}
