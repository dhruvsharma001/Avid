import Image from "next/image";
import { useAppNavigation } from "@/hooks/navigation";
import { Button, Spinner } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa6";
import { TTemplate } from "@/models/Template";
import { storage } from "@/firebase/firebase";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { ref as storageRef } from "firebase/storage";
import PremiumIcon from "../ui/PremiumIcon";
import { Thumbnail } from "@remotion/player";
import { MainComposition } from "@/remotion/textVideo/Composition";

type TProps = {
  template: TTemplate;
  templateId: string;
};
export function CardImageElement({ path, alt }: { path: string; alt: string }) {
  return (
    <Image className="rounded-xl" src={path} fill objectFit="cover" alt={alt} />
  );
}
export function CardImage({ path, alt }: { path: string; alt: string }) {
  const [value, loading, error] = useDownloadURL(storageRef(storage, path));
  if (loading)
    return (
      <div className="w-full h-full grid place-items-center">
        <Spinner />
      </div>
    );
  if (error) return <div>error {error.message}</div>;

  return CardImageElement({ path: value as unknown as string, alt });
}

export default function TemplateCard(props: TProps) {
  const { template, templateId } = props;
  const { navigateToPage } = useAppNavigation();
  const thumbnailProps = template.props;
  thumbnailProps.clips = [
    template.props.clips[template.thumbnailClipIndex || 0],
  ];
  return (
    <div className="rounded-xl p-[1px] hover:bg-avid-gradient duration-300">
      <div
        className="relative bg-avid-main-400 p-3 rounded-xl w-72 h-96 group cursor-pointer"
        onClick={() => navigateToPage(templateId)}
      >
        <div className="relative w-full h-full overflow-hidden">
          {
            <Thumbnail
              component={MainComposition}
              compositionWidth={350}
              compositionHeight={500}
              frameToDisplay={1}
              durationInFrames={
                thumbnailProps.clips.reduce((clip) => clip.duration || 1, 0) *
                30
              }
              fps={30}
              inputProps={thumbnailProps}
              style={{ width: "100%", height: "100%" }}
            ></Thumbnail>
          }

          <div className="absolute w-full h-full top-0 left-0 rounded-xl bg-black/40" />
        </div>
        <div className="p-6 absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full flex flex-col justify-between">
            {!!template.category ? (
              <span className="self-end bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                {template.category}
              </span>
            ) : (
              <div></div>
            )}
            <div>
              <div className="flex justify-between flex-row">
                <span>
                  {template.name.length < 16
                    ? template.name
                    : template.name.slice(0, 16) + ".."}
                </span>
                {template.isPremium && <PremiumIcon></PremiumIcon>}
              </div>
              <Button
                className="w-full mt-5 hidden group-hover:block"
                color="primary"
                onClick={() => navigateToPage(templateId)}
              >
                <span className="flex justify-between items-center">
                  Customize <FaChevronRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
