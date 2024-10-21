import { TBlog } from "@/models/Blog";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Spinner,
} from "@nextui-org/react";
import { staticFile } from "remotion";
import { useAppNavigation } from "@/hooks/navigation";
import { clipStringToLength } from "@/lib/utils";

function NormalBlogCard(blog: TBlog) {
  const navigation = useAppNavigation();
  const navigateToBlog = () => {
    navigation.navigateToBlog(blog.slug);
  };

  return (
    <Card
      className="col-span-12 sm:col-span-4 h-[300px] hover:scale-105 cursor-pointer"
      onPress={navigateToBlog}
      isPressable
      shadow="sm"
    >
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {blog.category}
        </p>
        <h4 className="text-white font-medium text-large">
          {clipStringToLength(blog.title, 20)}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={blog.image || staticFile("/assets/hero-card.jpeg")}
      />
    </Card>
  );
}

export default NormalBlogCard;
