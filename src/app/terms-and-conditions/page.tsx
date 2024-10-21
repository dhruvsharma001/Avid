import TermsAndConditions from "@/components/Policy/TermsAndConditions";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Titlebar from "@/components/reusables/Titlebar";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <Titlebar title="Terms And Conditions" />
          <TermsAndConditions />
        </MaxWidthWrapper>
      </main>
    </>
  );
}
