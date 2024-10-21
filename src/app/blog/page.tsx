import MaxWidthWrapper from "../MaxWidthWrapper";
import Titlebar from "@/components/reusables/Titlebar";
import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";

export default function page() {
  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <Titlebar title="Blog" />
          <Blog />
        </MaxWidthWrapper>
      </main>
    </>
  );
}
