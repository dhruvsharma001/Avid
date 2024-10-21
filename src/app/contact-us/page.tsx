import MaxWidthWrapper from "../MaxWidthWrapper";
import Titlebar from "@/components/reusables/Titlebar";
import Navbar from "@/components/Navbar";
import { FaLocationPin, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import ContactForm from "./ContactForm";

export default function page() {
  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <Titlebar title="Contact Us" showBackButton />
          <p className="text-4xl p-4"> Contact Us </p>
          <div className="grid md:grid-cols-6 grid-cols-1">
            <div className="flex text-center w-full top-50 flex-col gap-8 md:col-span-2">
              <div className="flex flex-row text-2xl gap-4">
                <MdEmail></MdEmail>
                <a href="mailto:hello@blinkadz.com">hello@blinkadz.com</a>
              </div>
              <div className="flex flex-row text-2xl gap-4">
                <FaPhone />
                <a href="tel:13028890733">+1 302 889-0733</a>
              </div>

              <div className="flex flex-row text-2xl gap-4">
                <FaLocationPin />
                <div className="flex flex-col text-start">
                  <span>D 39 Chomu House,</span>
                  <span>C Scheme,</span>
                  <span>Jaipur, Rajasthan,</span>
                  <span>India</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 gap-4">
              <ContactForm />
            </div>
          </div>
        </MaxWidthWrapper>
      </main>
    </>
  );
}
