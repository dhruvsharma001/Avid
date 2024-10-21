import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import ArtistTemplateListing from "@/components/Dashboard/artist/ArtistTemplateListing";
import Navbar from "@/components/Navbar";
import Titlebar from "@/components/reusables/Titlebar";

function page() {
  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <Titlebar title="My Templates" showBackButton />
          <ArtistTemplateListing></ArtistTemplateListing>
        </MaxWidthWrapper>
      </main>
    </>
  );
}

export default page;
