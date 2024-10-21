"use client";
import React from "react";
import Loader from "../Loader";
import { useUserStore } from "@/stores/user";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { FIREBASE_CONSTANTS } from "@/constants";
import firestore from "@/firebase/db";
import FoF from "../404/404";
import { TProject } from "@/models/Project";
import ProjectCard from "./ProjectCard";

type TProps = {
  userId: string;
};

function ProjectCardsGrid(props: TProps) {
  const [projects, loading, error] = useCollectionData(
    query(
      collection(firestore, FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS),
      where("userId", "==", props.userId)
    )
  );
  if (loading) return <Loader fullPage />;

  if (error) return <FoF text="Error" />;
  if (!projects) return <FoF text="No projects" />;
  const allProjects = projects as TProject[];
  return (
    <div className=" grid grid-cols-4 gap-4">
      {allProjects.map((project, index) => {
        return <ProjectCard project={project} key={index} />;
      })}
    </div>
  );
}
export default function ProjectGrid() {
  const user = useUserStore((store) => store.user);
  if (!user) return <FoF text="No User" />;

  return (
    <div>
      <ProjectCardsGrid userId={user.uid} />
    </div>
  );
}
