import { FIREBASE_CONSTANTS } from "@/constants";
import { usePaginatedQuery } from "@/hooks/usePaginatedQuery";
import { getErrorText } from "@/lib/utils";
import useStudioStore, { StudioState } from "@/stores/studio";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt, FaFolder } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdGradient, MdOutlinePermMedia } from "react-icons/md";
import { RiEmojiStickerLine, RiStarSmileLine } from "react-icons/ri";
import "./Styles/DialogBox.css";

type DialogBoxProps = {
  isOpen: boolean;
  onClose: () => void;
  type: string;
};

type List = {
  url: string;
};

const videoLists: List[] = [
  {
    url: "https://videos.pexels.com/video-files/3945144/3945144-sd_426_226_25fps.mp4",
  },
];
const imageLists: List[] = [
  {
    url: "https://content.typeframes.com/stickers/Airplane.gif",
  },
];

const animationLists: List[] = [
  {
    url: "https://assets-v2.lottiefiles.com/a/129ebde6-1172-11ee-b9a6-9b344a86522f/1TuHKjWbAY.mp4",
  },
];
const mediaLists: List[] = [
  {
    url: "https://content.typeframes.com/gradients-min/4087ef40-a909-4502-8a94-63dd3eae540d.webm",
  },
];
export default function DialogBox(props: DialogBoxProps) {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const type = props.type;
  const dialogRef = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState<string>(type);

  const addVideoContent = useStudioStore(
    (state: StudioState) => state.addVideoContent
  );
  const activeClip = useStudioStore((state: StudioState) => state.activeClipId);
  const addImageContent = useStudioStore(
    (state: StudioState) => state.addImageContent
  );
  const addLottieContent = useStudioStore(
    (state: StudioState) => state.addLottieContent
  );
  const orderQuery = [{ fieldPath: "createdAt", direction: "desc" as const }];
  const whereQuery = [
    { fieldPath: "listed", queryOperator: "==" as const, value: true },
    {
      fieldPath: "category",
      queryOperator: "==" as const,
      value: "sticker",
    },
    {
      fieldPath: "access",
      queryOperator: "==" as const,
      value: "public",
    },
  ];
  debugger;
  const {
    docs,
    areMoreDataAvailable: areMoreAssetsAvailable,
    loadMoreDocs: loadMoreAssets,
    loading,
    error,
  } = usePaginatedQuery(
    FIREBASE_CONSTANTS.COLLECTIONS.ASSETS,
    12,
    orderQuery,
    whereQuery
  );

  const updateClipBackgroundVideo = useStudioStore(
    (state: StudioState) => state.updateClipBackgroundVideo
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    console.log(docs);
  }, [selectedType]);
  const handleCloseButtonClick = () => {
    onClose();
  };

  const handleMenuItemClick = (selectedType: string) => {
    setSelectedType(selectedType);
  };
  function handleAddVideoContent(url: string) {
    addVideoContent(activeClip, url);
    onClose();
  }

  function handleAddImageContent(url: string) {
    addImageContent(activeClip, url);
    onClose();
  }

  function handleAddLottieContent(url: string) {
    addLottieContent(activeClip, url);
    onClose();
  }

  function handleUpdateClipBackgroundVideo(clipId: string, value: string) {
    updateClipBackgroundVideo(clipId, value);
    onClose();
  }

  const renderDialogContent = () => {
    switch (selectedType) {
      case "Video":
        return (
          <>
            {videoLists.map((item: List, index: number) => (
              <div
                key={index}
                className="Dialog-Items"
                onClick={() => handleAddVideoContent(item.url)}
              >
                <video
                  autoPlay
                  muted
                  loop
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                >
                  <source src={item.url} type="video/mp4" />
                </video>
              </div>
            ))}
          </>
        );
      case "Sticker":
        return (
          <>
            {imageLists.map((item: List, index: number) => (
              <div
                key={index}
                className="Dialog-Items"
                onClick={() => handleAddImageContent(item.url)}
              >
                <Image src={item.url} alt="Sticker" width={219} height={40} />
              </div>
            ))}
          </>
        );
      case "Animation":
        return (
          <>
            {animationLists.map((item: List, index: number) => (
              <div
                key={index}
                className="Dialog-Items"
                onClick={() => handleAddLottieContent(item.url)}
              >
                <video
                  src={item.url}
                  autoPlay
                  style={{ aspectRatio: "1 / 1" }}
                ></video>
              </div>
            ))}
          </>
        );
      case "Media":
        return (
          <>
            {mediaLists.map((item: List, index: number) => (
              <div
                key={index}
                className="Dialog-Items"
                onClick={() =>
                  handleUpdateClipBackgroundVideo(activeClip, item.url)
                }
              >
                <video autoPlay loop muted className="Dialog-Items-Media-Video">
                  <source src={item.url} />
                </video>
              </div>
            ))}
          </>
        );
      default:
        return imageLists.map((item: List, index: number) => (
          <div key={index} className="Dialog-Items"></div>
        ));
    }
  };
  if (loading) return <Spinner label="Loading" />;
  return (
    isOpen && (
      <div className="Dialog-Overlay">
        <div className="Dialog-Box" ref={dialogRef}>
          <div className="Dialog-LeftBar">
            <ul className="Dialog-LeftBar-MenuContainer">
              <li
                className="Dialog-LeftBar-MenuItem"
                onClick={() => handleMenuItemClick("Upload")}
              >
                <span>
                  <FaCloudUploadAlt />
                </span>
                <span>Upload</span>
              </li>
              <li
                className={`Dialog-LeftBar-MenuItem  ${
                  selectedType === "Image" ? "selected" : ""
                }`}
                onClick={() => handleMenuItemClick("Image")}
              >
                <span>
                  <FaFolder />
                </span>
                <span>Media</span>
              </li>
              <li
                className={`Dialog-LeftBar-MenuItem ${
                  selectedType === "Video" ? "selected" : ""
                }`}
                onClick={() => handleMenuItemClick("Video")}
              >
                <span>
                  <MdOutlinePermMedia />
                </span>
                <span>Video</span>
              </li>
              <li
                className={`Dialog-LeftBar-MenuItem ${
                  selectedType === "Sticker" ? "selected" : ""
                }`}
                onClick={() => handleMenuItemClick("Sticker")}
              >
                <span>
                  <RiEmojiStickerLine />
                </span>
                <span>Sticker</span>
              </li>
              <li
                className={`Dialog-LeftBar-MenuItem ${
                  selectedType === "Animation" ? "selected" : ""
                }`}
                onClick={() => handleMenuItemClick("Animation")}
              >
                <span>
                  <RiStarSmileLine />
                </span>
                <span>Animation</span>
              </li>
              <li
                className={`Dialog-LeftBar-MenuItem ${
                  selectedType === "Gradients" ? "selected" : ""
                }`}
                onClick={() => handleMenuItemClick("Gradients")}
              >
                <span>
                  <MdGradient />
                </span>
                <span>Gradients</span>
              </li>
            </ul>
          </div>
          <div className="Dialog-RightBar-Container">
            <div className="DialogBox-Text">
              <h3 className="Dialog-RightBar-Container-Text">{selectedType}</h3>
              <div
                className="DialogBox-CrossButton"
                onClick={handleCloseButtonClick}
              >
                <IoMdClose />
              </div>
            </div>
            {error && <div>{getErrorText(error)}</div>}
            {loading ? (
              <Spinner></Spinner>
            ) : (
              <div className="Dialog-RightBar">{renderDialogContent()}</div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
