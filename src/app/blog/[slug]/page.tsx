"use client";
import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";

import { FIREBASE_CONSTANTS } from "@/constants";
import firestore from "@/firebase/db";
import { Spinner } from "@nextui-org/react";
import Info from "@/components/ui/Info";
import BlogDetail from "@/components/Blog/BlogDetail";
import { TBlog } from "@/models/Blog";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [blog, loading, error] = useDocumentDataOnce(
    doc(firestore, FIREBASE_CONSTANTS.COLLECTIONS.BLOGS, slug)
  );

  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <BlogDetail blog={blog as TBlog} loading={loading} error={error} />
        </MaxWidthWrapper>
      </main>
    </>
  );
}
