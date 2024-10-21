import { useState } from "react";
import { ref as storageRef } from "firebase/storage";
import { useDownloadURL } from "react-firebase-hooks/storage";
import {
  IoPhoneLandscapeOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { cn } from "@/lib/utils";
import { storage } from "@/firebase/firebase";
import { Spinner } from "@nextui-org/react";

type TProps = {
  videoURLs: string[];
};
function SamplePreview(props: TProps) {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "portrait"
  );

  const [value, loading, error] = useDownloadURL(
    storageRef(storage, props.videoURLs[0])
  );

  const [valuePortrait, loadingPortrait, errorPortrait] = useDownloadURL(
    storageRef(storage, props.videoURLs[1])
  );
  const isPortrait = orientation === "portrait";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-3">
        <IoPhonePortraitOutline
          className={cn(
            "border rounded-xl p-3 text-6xl duration-300",
            isPortrait
              ? "text-avid-accent border-avid-accent"
              : "text-avid-gray-400 border-avid-gray-400"
          )}
          onClick={() => setOrientation("portrait")}
        />
        <IoPhoneLandscapeOutline
          className={cn(
            "border rounded-xl p-3 text-6xl duration-300",
            !isPortrait
              ? "text-avid-accent border-avid-accent"
              : "text-avid-gray-400 border-avid-gray-400"
          )}
          onClick={() => setOrientation("landscape")}
        />
      </div>
      <div
        className={cn(
          "w-full bg-avid-main-400 p-3 rounded-xl duration-300",
          isPortrait ? "h-[28rem] md:h-[35rem]" : "md:h-80 aspect-video"
        )}
      >
        {loading || loadingPortrait ? (
          <div className="h-full grid place-items-center">
            <Spinner />
          </div>
        ) : (
          <video
            className="w-full h-full object-fit rounded-xl"
            src={orientation == "landscape" ? value : valuePortrait}
            autoPlay
            loop
            controls
            controlsList="nodownload"
          />
        )}
      </div>
    </div>
  );
}

export default SamplePreview;
