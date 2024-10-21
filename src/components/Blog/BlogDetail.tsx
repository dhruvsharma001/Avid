import { TBlog } from "@/models/Blog";
import React from "react";
import Info from "../ui/Info";
import { Spinner } from "@nextui-org/react";
import Titlebar from "@/components/reusables/Titlebar";
import Image from "next/image";
type TProps = {
  blog: TBlog | undefined;
  loading: boolean;
  error?: any;
};
function BlogDetail(props: TProps) {
  if (props.loading) return <Spinner label="Loading..." />;

  if (props.error) return <Info text={props.error.message} />;
  if (!props.blog) return <Info text="Blog not found" />;
  return (
    <div>
      <Titlebar title={props.blog.title} showBackButton />
      <Image
        src={props.blog.image || "/assets/hero-card.jpeg"}
        alt="Blog image"
        width={1000}
        height={500}
        className="w-full h-96 object-cover border border-gray-300 p-10"
      ></Image>
      <div
        dangerouslySetInnerHTML={{ __html: props.blog.content || "" }}
        className="pt-10"
      />
    </div>
  );
}

export default BlogDetail;
