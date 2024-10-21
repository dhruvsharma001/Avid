import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import SelectTemplateSection from "@/components/Home/SelectTemplateSection";
import EnterValuesSection from "@/components/Home/EnterValuesSection";
import PayNowSection from "@/components/Home/PayNowSection";
import CreateCustomSection from "@/components/Home/CreateCustomSection";
import Footer from "@/components/Footer";
import MyProjectsSection from "@/components/Home/MyProjectsSection";
import SubscriptionSection from "@/components/Home/SubscriptionSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MyProjectsSection />
        <SelectTemplateSection />
        <EnterValuesSection />
        <PayNowSection />
        <CreateCustomSection />
        <SubscriptionSection />
      </main>
      <Footer />
    </>
  );
}
