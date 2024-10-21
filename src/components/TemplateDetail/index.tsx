import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// Hooks
import { useAppNavigation } from "@/hooks/navigation";
import { useUserStore } from "@/stores/user";
// Firebase
import {
  useCollectionDataOnce,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore";
// NextUi Components
import {
  Button,
  Chip,
  Divider,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
// Components
import SamplePreview from "./SamplePreview";
import LikeUnlikeButton from "./LikeUnlikeButton";
import TemplateRatingModal from "./modals/TemplateRatingModal";
// Icons
import { FaStar } from "react-icons/fa";

import { createNewProjectForUser } from "./helpers/createNewRenderObjForUser";
import { getRating, getRenders } from "./queries";
// Models
import { TTemplate } from "@/models/Template";
import { TRate } from "@/models/Rate";
import { TProject } from "@/models/Project";
import { FaCrow, FaCrown } from "react-icons/fa6";
import PremiumIcon from "../ui/PremiumIcon";
import { Thumbnail } from "@remotion/player";
import { MainComposition } from "@/remotion/textVideo/Composition";
import RemotionPlayer from "../TemplateComposer/RemotionPlayer";

type TProps = {
  template: TTemplate;
  templateId: string;
};
export default function TemplateDetail({ template, templateId }: TProps) {
  const { navigateToPage, navigateToLogin } = useAppNavigation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = useUserStore((state) => state.user);

  //get user project collection if Not exist create one
  const [projects, areRendersLoading, rendersError] = useCollectionDataOnce(
    getRenders(templateId, user?.uid)
  );
  const project = projects?.[0] as TProject;

  const [_rating, isRatingLoading, ratingError] = useDocumentDataOnce(
    getRating(templateId, user?.uid)
  );
  const rate = _rating as TRate;

  const [rating, setRating] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setRating(rate?.rating || 0);
  }, [rate]);

  useEffect(() => {
    if (rendersError || ratingError) {
      toast.error(rendersError?.message! || ratingError?.message!);
    }
  }, [ratingError, rendersError]);

  const navigateToComposer = async () => {
    setIsNavigating(true);
    if (!user) return toast.error("Please login to edit this template");
    try {
      ///get or create renderId

      const res = await createNewProjectForUser(templateId, user).catch(
        (err) => {
          throw new Error(err);
        }
      );
      let projectId = res.data.projectId;

      navigateToPage(`/studio/${projectId}`);
    } catch (error: any) {
      if (error.message === "Token Expired") {
        navigateToLogin(window.location.pathname);
      }
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsNavigating(false);
    }
  };

  const isPremium = template.isPremium;

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 duration-300">
      <div className="lg:w-2/5 duration-300 overflow-hidden">
        {
          <RemotionPlayer
            inputProps={template.props}
            options={{ controls: true }}
            size={{ width: 350, height: 500 }}
          ></RemotionPlayer>
        }
      </div>
      <div className="lg:w-3/5 duration-300">
        {/* Title-------------------------------------------------- starts here */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:mt-12 duration-300">
          <h1 className="text-2xl lg:text-4xl font-semibold duration-300">
            {template.name}
          </h1>
          <div className="flex items-center gap-5 ">
            {isRatingLoading ? (
              <Spinner />
            ) : (
              <>
                <div
                  className="flex items-center rounded-lg gap-3 border border-avid-gray-400 p-2 cursor-pointer"
                  onClick={() => user && onOpen()}
                >
                  <FaStar className="text-yellow-600" />
                  <span>{template.rating}</span>
                </div>

                {/* <div className="p-3 rounded-full border border-avid-gray-400 cursor-pointer">
                  <FaRegBookmark />
                </div> */}

                <LikeUnlikeButton userId={user?.uid} templateId={templateId} />
              </>
            )}
          </div>
        </div>
        {/* Title-------------------------------------------------- ends here */}
        <Divider className="my-5 lg:hidden duration-300" />

        {/* Descriptiion-------------------------------------------------- starts here */}
        <p className="text-avid-gray-300 lg:mt-5">{template.description}</p>
        <div className="flex flex-row gap-8">
          <h1 className="text-xl lg:text-2xl font-semibold mt-4 duration-300">
            {isPremium && <PremiumIcon></PremiumIcon>}
          </h1>
        </div>

        {/* Descriptiion-------------------------------------------------- ends here */}
        <Divider className="my-5" />

        {/* Tags-------------------------------------------------- starts here */}
        <div className="flex flex-wrap gap-2">
          <span>Tags: </span>
          {template.tags &&
            Array.from(template.tags).map((tag) => {
              return tag && <Chip key={tag}>{tag}</Chip>;
            })}
        </div>

        <Button
          className="bg-avid-gradient w-fit px-10 mt-7"
          onClick={navigateToComposer}
          isLoading={isNavigating || areRendersLoading}
        >
          Select Template
        </Button>
        {/* Tags-------------------------------------------------- ends here */}
      </div>
      <TemplateRatingModal
        userId={user?.uid}
        templateId={templateId}
        isOpen={isOpen}
        onClose={onClose}
        rating={rating}
        setRating={setRating}
      />
    </div>
  );
}
