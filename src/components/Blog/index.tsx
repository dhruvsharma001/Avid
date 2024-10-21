"use client";
import { TBlog } from "@/models/Blog";
import firestore from "@/firebase/db";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Spinner,
} from "@nextui-org/react";
import { collection, query } from "firebase/firestore";
import { useEffect } from "react";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { FIREBASE_CONSTANTS } from "@/constants";
import Info from "../ui/Info";
import NormalBlogCard from "./NormalBlogCard";
type TProps = {};

function Blog(props: TProps) {
  const [blogs, loading, error] = useCollectionDataOnce(
    query(collection(firestore, FIREBASE_CONSTANTS.COLLECTIONS.BLOGS)),
    {
      getOptions: {},
    }
  );

  if (error) return <Info text={error.message} />;

  return (
    <div className="flex text-center w-full">
      <div className=" w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
        {loading ? (
          <Spinner
            label="Loading"
            className="col-span-12 justify-center"
          ></Spinner>
        ) : (
          blogs?.map((blog: any) => {
            const typedBlog: TBlog = blog as TBlog;
            return <NormalBlogCard key={typedBlog.slug} {...typedBlog} />;
          })
        )}
        {!loading && (!blogs || blogs.length == 0) && (
          <Info text="No blogs found" />
        )}
      </div>
    </div>
  );
}

export default Blog;
