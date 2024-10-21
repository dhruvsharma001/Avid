"use client";
import React from "react";
import Loader from "../Loader";
import { useUserStore } from "@/stores/user";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { FIREBASE_CONSTANTS } from "@/constants";
import firestore from "@/firebase/db";
import FoF from "../404/404";
import { TRender } from "@/models/Render";
import RenderCard from "./RenderCard";

type TProps = {
  userId: string;
};

function ExportCardList(props: TProps) {
  const [renders, loading, error] = useCollectionDataOnce(
    query(
      collection(firestore, FIREBASE_CONSTANTS.COLLECTIONS.RENDER),
      where("userId", "==", props.userId)
    )
  );
  if (loading) return <Loader fullPage />;

  if (error) return <FoF text="Error" />;
  if (!renders) return <FoF text="No Renders" />;
  const allRenders = renders as TRender[];
  return (
    <div className=" grid grid-cols-4 gap-4">
      {allRenders.map((render, index) => {
        return <RenderCard render={render} key={index} />;
      })}
    </div>
  );
}
export default function ExportList() {
  const user = useUserStore((store) => store.user);
  if (!user) return <FoF text="No User" />;

  return (
    <div>
      <ExportCardList userId={user.uid}></ExportCardList>
    </div>
  );
}
