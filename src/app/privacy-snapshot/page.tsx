import PrivacyPolicy from "@/components/Policy/PrivacyPolicy";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Titlebar from "@/components/reusables/Titlebar";

export default function page() {
  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <Titlebar title="Privacy Policy" />
          <PrivacyPolicy />
        </MaxWidthWrapper>
      </main>
    </>
  );
}
