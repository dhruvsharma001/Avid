import Link from "next/link";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import Logo from "@/components/Logo";
import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import { policies, quickWorks, socialLinks } from "./helpers";

import SubscriptionBox from "./SubscriptionBox";

const socialLinkMap = {
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
};

export default function Footer() {
  return (
    <footer className="bg-avid-main-400">
      <MaxWidthWrapper className="relative pb-5 md:pb-5">
        <div className="flex flex-col lg:flex-row gap-5 justify-between">
          <div className="flex">
            <div>
              <Logo />
              <Divider className="my-5" />
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <SocialLink
                    key={social.id}
                    name={social.name}
                    link={social.link}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex">
            <Divider className="" orientation="vertical" />
          </div>

          <div className="flex">
            <div>
              <h3 className="">Quick Work</h3>
              <Divider className="my-5" />
              <div className="flex flex-col gap-2">
                {quickWorks.map((item) => (
                  <RedirectLinkComponent
                    key={item.id}
                    name={item.name}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex">
            <Divider className="" orientation="vertical" />
          </div>

          <div className="flex">
            <div>
              <h3 className="">Policy</h3>
              <Divider className="my-5" />
              <div className="flex flex-col gap-2">
                {policies.map((item) => (
                  <RedirectLinkComponent
                    key={item.id}
                    name={item.name}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex">
            <Divider className="" orientation="vertical" />
          </div>

          <SubscriptionBox />
        </div>
        <Image
          className="hidden lg:block selectDisable absolute bottom-0 right-10 rotate-90"
          src="/assets/vectors/blue-triangle.svg"
          width={50}
          height={55}
          alt="Graphic image"
        />
      </MaxWidthWrapper>

      <Divider className="mt-5" />
      <div className="py-5">
        <p className="text-center m-0">
          &#169; {new Date().getFullYear()}
          <Link href="/" className="text-avid-accent">
            {" "}
            Blinkadz (CineMachines Pvt. Ltd.)
          </Link>
          . All Rights Reserved.
        </p>
        <p className="text-avid-gray-300 text-xs text-center mt-4">
          We improve our products and advertising by using Microsoft Clarity and
          Google Analytics to see how you use our website. By using our site,
          you agree that we Microsoft and Google can collect and use this data.
          Our{" "}
          <Link href={"/privacy-snapshot"} className="text-avid-accent">
            privacy statement
          </Link>{" "}
          has more details
        </p>
      </div>
    </footer>
  );
}

type TProps = {
  name: string;
  link: string;
};
function RedirectLinkComponent(props: TProps) {
  return (
    <Link
      href={props.link}
      className="flex items-center gap-2 text-avid-gray-300 cursor-pointer hover:text-white duration-400"
    >
      <FaAngleRight />
      <p>{props.name}</p>
    </Link>
  );
}

type TSocialLinkProps = {
  name: string;
  link: string;
};
function SocialLink(props: TSocialLinkProps) {
  return (
    <Link
      href={props.link}
      className="border border-white rounded-full w-10 h-10 grid place-items-center hover:bg-avid-accent hover:border-none duration-300"
    >
      {socialLinkMap[props.name as keyof typeof socialLinkMap]}
    </Link>
  );
}
