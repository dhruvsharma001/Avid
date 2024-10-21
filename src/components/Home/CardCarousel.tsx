import { TUser } from "@/types";
import React from "react";
import { User } from "firebase/auth";
import EmblaCardCarousel from "../ui/EmblaCardCarousel";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import {
  OrderByDirection,
  QueryConstraint,
  WhereFilterOp,
  collection,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import firestore from "@/firebase/db";
import { FIREBASE_CONSTANTS } from "@/constants";
import {
  Spinner,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import {} from "@nextui-org/react";
import ProjectCard from "../MyProjects/ProjectCard";
import { TProject } from "@/models/Project";
import { useAppNavigation } from "@/hooks/navigation";

type TProps = {
  user: User;
  noProjectFallback?: () => JSX.Element;
};
function CardCarousel(props: TProps) {
  const { user, noProjectFallback } = props;
  const navigator = useAppNavigation();
  const [projects, loading, error] = useCollectionDataOnce(
    query(
      collection(firestore, FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS),
      where("userId", "==", user.uid),
      orderBy("updatedAt", "desc"),
      limit(4)
    )
  );
  if (loading)
    return (
      <div className="w-full">
        <Spinner label="Loading" />
      </div>
    );
  if (error) return <div>Error {error.message}</div>;
  if (projects?.length === 0)
    return (
      <div className="flex flex-col justify-center text-center items-center">
        {noProjectFallback ? noProjectFallback() : null}
        <span>No Active projects . Create One Now </span>
        <Button
          onClick={() => {
            navigator.navigateToTemplateListing();
          }}
          className="ml-2 max-w-[100px] mt-10"
        >
          {" "}
          Create
        </Button>
      </div>
    );
  const data = projects?.map((project) => {
    return <ProjectCard project={project as TProject} key={project.id} />;
  });
  if (!data) return noProjectFallback ? noProjectFallback() : null;
  return (
    <div>
      <EmblaCardCarousel data={data} />
    </div>
  );
}

export default CardCarousel;
