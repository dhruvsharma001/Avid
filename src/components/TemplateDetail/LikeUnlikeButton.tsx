import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
// Components
import { Spinner } from "@nextui-org/react";
// Icons
import { FaHeart, FaRegHeart } from "react-icons/fa6";
// Utils
import { nextFetch } from "@/lib/fetch";
import { cn } from "@/lib/utils";
import { API_ROUTES, NOTIFICATION_TEXTS } from "@/constants";
import { getLike } from "./queries";
import { TLike } from "@/models/Likes";

export default function LikeUnlikeButton({
  userId,
  templateId,
}: {
  userId?: string;
  templateId: string;
}) {
  const [like, isLikeLoading, likeError] = useDocumentDataOnce(
    getLike(templateId, userId)
  );
  const templateLike = like as TLike;

  const [hasUserLiked, setHasUserLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    if (likeError) {
      toast.error(likeError?.message!);
    }

    if (templateLike?.liked) {
      setHasUserLiked(true);
    }
  }, [templateLike, likeError]);

  const handleLike = async (type: "like" | "unlike") => {
    setIsLiking(true);
    setHasUserLiked(type === "like" ? true : false);

    try {
      const { data, status, ok } = await nextFetch(
        API_ROUTES.TEMPLATE_LIKE.CREATE,
        {
          method: "POST",
          body: JSON.stringify({
            userId,
            templateId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!ok) {
        setHasUserLiked(type === "like" ? false : true);
        toast.error(data.message || data.error);
      } else {
        toast.success(
          type === "like"
            ? NOTIFICATION_TEXTS.TEMPLATE_LIKE.TEMPLATE_LIKE_SUCCESS
            : NOTIFICATION_TEXTS.TEMPLATE_LIKE.TEMPLATE_UNLIKE_SUCCESS
        );
      }
    } catch (error: any) {
      console.error("Error while adding template to favorites: ", error);

      setHasUserLiked(type === "like" ? false : true);
      toast.error(error.message);
    } finally {
      setIsLiking(false);
    }
  };

  if (isLikeLoading) {
    return <Spinner />;
  }

  return (
    <div
      className={cn("p-3 rounded-full border border-avid-gray-400", {
        "animate-pulse": isLiking,
        "cursor-pointer": !isLiking,
        "border-avid-accent": isLiking,
      })}
      onClick={() => !isLiking && handleLike(hasUserLiked ? "unlike" : "like")}
    >
      {hasUserLiked ? <FaHeart /> : <FaRegHeart />}
    </div>
  );
}
