"use client";
import { useEffect, useState, useRef } from "react";
import useStudioStore, { StudioState } from "@/stores/studio";
import { TClip, TClipContent } from "@/remotion/textVideo/types";
import { MdDragIndicator } from "react-icons/md";
import { MdFormatColorText } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import Image from "next/image";
import { DragControls, Reorder, motion, useDragControls } from 'framer-motion';
import { RiEmojiStickerLine } from "react-icons/ri";
import { GoVideo } from "react-icons/go";
import { RiStarSmileLine } from "react-icons/ri";
import LeftBarModal from "./LeftBarModal";
import { TbTransitionRight } from "react-icons/tb";


type LeftClipProps = {
  clip: TClip,
  handleAddClip: () => void,
  clipIndex: number
}

export default function LeftClip(props: LeftClipProps) {

  /**
   *  defined props
   */
  const clip = props.clip;
  const clipIndex = props.clipIndex;
  const handleAddClip = props.handleAddClip;

  // State variables
  const [currentActiveClip, setCurrentActiveClip] = useState<TClip>();
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [deleteIconIndex, setDeleteIconIndex] = useState<string>("");
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenLeftBarModal, setIsOpenLeftBarModal] = useState(false);
  const [clipImagesLists, setClipImagesLists] = useState([]);
  const [clipVideosLists, setClipVideosLists] = useState([]);
  const [clipAnimationsLists, setClipAnimationsLists] = useState([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const leftModalRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();

  // Studio store states
  const activeClip = useStudioStore((state: StudioState) => state.activeClipId);


  /**
   * Studio Store handlers
   */
  const setActiveClip = useStudioStore((state: StudioState) => state.setActiveClip);
  const setActiveClipIndex = useStudioStore((state: StudioState) => state.setActiveClipIndex);
  const removeClip = useStudioStore((state: StudioState) => state.removeClip);
  const duplicateClip = useStudioStore((state: StudioState) => state.duplicateClip);
  const updateTextContent = useStudioStore((state: StudioState) => state.updateTextContent);
  const removeTextContent = useStudioStore((state: StudioState) => state.removeTextContent);
  const updateClipDuration = useStudioStore((state: StudioState) => state.updateClipDuration);
  const removeAllImagesContent = useStudioStore((state: StudioState) => state.removeAllImagesContent);
  const removeAllVideosContent = useStudioStore((state: StudioState) => state.removeAllVideosContent);
  const removeAllLottiesContent = useStudioStore((state: StudioState) => state.removeAllLottiesContent);


  // useEffect(() => {
  //   console.log("clip - ", clip);
  //   setCurrentActiveClip(clip.id === activeClip);
  // }, [])

  /**
   * This useEffect is used to handle edit modal
   */
  useEffect(() => {
    function handler(e: MouseEvent) {
      const targetElement = e.target as Element;
      if (menuRef.current && !menuRef.current?.contains(e.target as Node)
        && (!targetElement.classList.contains("left-container-editBar-leftInfo") || !targetElement.classList.contains("timeFrame")
          || targetElement.id !== "edit-icon")) {
        setIsOpenEditModal(false);
      }
    }

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    }
  }, [isOpenEditModal])

  /**
   * This useEffect filters image, video and lottie files from the clip content into individual array
   */
  useEffect(() => {
    const images = clip?.content?.filter((item: TClipContent) => item.type === "image");
    const videos = clip?.content?.filter((item: TClipContent) => item.type === "video");
    const animations = clip?.content?.filter((item: TClipContent) => item.type === "lottie");

    setClipImagesLists(images);
    setClipVideosLists(videos);
    setClipAnimationsLists(animations);
  }, [clip.content])

  /**
   * This handler sets the active clip and active clip index
   */
  function handleSetActiveClip(clipId: string, index: number) {
    setActiveClip(clipId);
    setActiveClipIndex(index);
  }

  /**
   * This handler show and hide the edit modal
   * @param {React.MouseEvent<HTMLDivElement>} e - Event to handle edit modal
   */
  function handleEditModal(e: React.MouseEvent<HTMLDivElement>) {
    setIsOpenEditModal(!isOpenEditModal);
  }

  /**
   * This handler show and hide the Left bar modal
   * @param {React.MouseEvent<HTMLDivElement>} e - Event to handle Left bar modal
   */
  function handleLeftBarModal(e: React.MouseEvent<HTMLDivElement>) {
    setIsOpenLeftBarModal(!isOpenLeftBarModal);
  }
  /**
   * This handler update the clip's duration in edit modal
   * @param {string} clipId - Clip Id of the individual clip
   * @param {number} duration - Duration of the clip
   */
  function handleUpdateClipDuration(clipId: string, duration: number) {
    updateClipDuration(clipId, duration)
  }

  /**
   * This handler removes the clip
   * @param {string} clipId - Clip Id of the individual clip
   */
  function handleRemoveClip(clipId: string) {
    removeClip(clipId);
  }

  /**
   * This handler update the text content within the clip
   * @param {string} clipId - Clip Id of the individual clip
   * @param {string} textId - Text Id of the content within the clip
   * @param {string} text - Text content enters by user
   */
  function handleUpdateText(clipId: string, textId: string, text: string) {
    updateTextContent(clipId, textId, text);
  }

  /**
   * This handler remove the text content within the clip
   * @param {string} clipId - Clip Id of the individual clip
   * @param {string} textId - Text Id of the content within the clip
   */
  function handleRemoveTextContent(clipId: string, textId: string) {
    removeTextContent(clipId, textId)
  }

  /**
   * This handles mouse hover on input text field to show delete icon at each input
   * @param {string} id - id of the input field
   */
  function handleMouseHoverDeleteIcon(id: string) {
    setDeleteIconIndex(id);
    setShowDeleteIcon(true)
  }

  /**
   * This handle mouse leave on input text field to hide delete icon at each input
   */
  function handleMouseLeaveDeleteIcon() {
    setDeleteIconIndex("");
    setShowDeleteIcon(false);
  }

  /**
   * This handler duplicate with the existing clip along with their content
   * @param {string} clipId - clip Id of the clip
   */
  function handleDuplicateClip(clipId: string) {
    duplicateClip(clipId);
    setActiveClip(clipId)
  }

  /**
   * This handler remove all the images content from the clip
   * @param {string} clipId - clip Id of the clip
   */
  function handleRemoveImageContent(clipId: string) {
    removeAllImagesContent(clipId)
  }

  /**
   * This handler remove all the videos content from the clip
   * @param {string} clipId - clip Id of the clip
   */
  function handleRemoveVideoContent(clipId: string) {
    removeAllVideosContent(clipId)
  }

  /**
   * This handler remove all the lotties content from the clip
   * @param {string} clipId - clip Id of the clip
   */
  function handleRemoveAnimationContent(clipId: string) {
    removeAllLottiesContent(clipId);
  }

  return (
    <Reorder.Item
      value={clip}
      key={clip.id}
      dragControls={dragControls}
      dragListener={false}
    >
      <div
        className={`left-container ${activeClip === clip.id ? "active-left-container" : ""}`}
        onClick={() => handleSetActiveClip(clip.id, clipIndex)}
      >
        <div className={`left-container-content ${activeClip === clip.id ? "active-left-container-content" : ""}`} >
          <MdDragIndicator id="left-container-content-icon" onPointerDown={(event) => {
            dragControls.start(event);
          }} />
          <div className="left-container-content-wrapper" >
            {
              clip?.content?.map((item: TClip, index: number) => (
                item.type == "text" && (
                  <div
                    className={`left-container-content-textBox
                      ${activeClip === clip.id && "active-left-container-content-textBox"}`}
                    onMouseOver={() => handleMouseHoverDeleteIcon(item.id)}
                    onMouseLeave={() => handleMouseLeaveDeleteIcon()}
                    key={index}
                  >
                    <MdFormatColorText id="left-container-content-textBox-icon" />
                    {
                      activeClip === clip.id ? (
                        <>
                          <input
                            className="left-container-content-textBox-inputField"
                            value={item.data}

                            onChange={(e) => handleUpdateText(clip.id, item.id, e.target.value)}
                          />
                          <span
                            className={`delete-text-icon 
                      ${showDeleteIcon &&
                                deleteIconIndex === item.id ? ''
                                : 'active-delete-icon'}`}
                            onClick={() => handleRemoveTextContent(clip.id, item.id)}
                          >
                            <MdDeleteOutline />
                          </span></>
                      ) : <p className="left-container-content-textBox-nonactive">{item.data}</p>
                    }
                  </div>
                )
              ))
            }
            {
              clipImagesLists?.length > 0 && (
                <>
                  <div className={`left-container-content-image-container ${activeClip === clip.id ? "image-asset-active" : ""}`}>
                    <span className="grid-special-icon">
                      <RiEmojiStickerLine />
                    </span>
                    <div className="left-container-content-image-wrapper">
                      {
                        clipImagesLists?.map((item: TClipContent, index: number) => (

                          <Image
                            src={item.data}
                            alt="Sticker"
                            width={40}
                            height={50}
                            key={index}
                          />
                        )
                        )
                      }
                    </div>
                    <span className="grid-delete-icon image-d-icon" onClick={() => handleRemoveImageContent(clip.id)}>
                      <MdDeleteOutline />
                    </span>
                  </div>
                </>
              )
            }
            {
              clipVideosLists?.length > 0 && (
                <>
                  <div className={`left-container-content-video-container ${activeClip === clip.id ? "video-asset-active" : ""}`}>
                    <span className="grid-special-icon">
                      <GoVideo />
                    </span>
                    <div className="left-container-content-video-wrapper">
                      {
                        clipVideosLists?.map((item: TClipContent, index: number) => (

                          <video
                            autoPlay
                            muted
                            loop
                            key={index}
                          >
                            <source
                              src={item.data}
                              type="video/mp4"
                            />
                          </video>
                        )
                        )
                      }
                    </div>
                    <span className="grid-delete-icon video-d-icon" onClick={() => handleRemoveVideoContent(clip.id)}>
                      <MdDeleteOutline />
                    </span>
                  </div>
                </>)
            }
            {
              clipAnimationsLists?.length > 0 &&
              (<>
                <div className={`left-container-content-animation-container ${activeClip === clip.id ? "animation-asset-active" : ""}`}>
                  <span className="grid-special-icon">
                    <RiStarSmileLine />
                  </span>
                  <div className="left-container-content-animation-wrapper">
                    {
                      clipAnimationsLists?.map((item: TClipContent, index: number) => (
                        <video
                          autoPlay
                          muted
                          loop
                          key={index}
                        >
                          <source
                            src={item.data}
                            type="video/mp4"
                          />
                        </video>
                      )
                      )
                    }
                  </div>
                  <span className="grid-delete-icon animation-d-icon" onClick={() => handleRemoveAnimationContent(clip.id)}>
                    <MdDeleteOutline />
                  </span>
                </div>
              </>
              )
            }
            {
              clip.id === activeClip && clip?.transition?.type && clip?.transition?.type!== "none" && clip?.transition?.type !=="" && (
                <div className={`left-container-content-transition-container ${activeClip === clip.id ? "active-left-container-content-transition-container" : ""}`}>
              <span className="transition-icon"><TbTransitionRight /></span>
              <div className="transition-infoBox">
                <p className="transition-infoBox-text">Transition :</p>
                <p className="transition-infoBox-type">{clip?.transition?.type}</p>
              </div>
            </div>
              )
            }
          </div>
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleLeftBarModal(e)}
            className={`${activeClip === clip.id ? "active-menu" : "menu"}`}>+</div>
          {activeClip !== clip.id && <p className="non-active-timeFrame">0.4s</p>}
        </div>
        <div
          className={`left-container-editBar ${activeClip === clip.id && "active-left-container-editBar"
            }`}
        >
          <div
            className={`left-container-editBar-leftInfo ${isOpenEditModal ? 'editBar-active' : ''}`}

            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleEditModal(e)}
          >

            <MdEdit id="edit-icon" />

            {<p className="timeFrame">{`${clip.duration}s`}</p>}
          </div>
          <div
            className={`edit-modal ${isOpenEditModal ? "opened-modal" : ""}`}
            ref={menuRef}
          >
            <p className="edit-modal-heading">Duration (in seconds)</p>
            <input
              type="number"
              value={clip.duration}
              onChange={(e) => handleUpdateClipDuration(clip.id, e.target.value === "" ? 0 : parseFloat(e.target.value))}
              onClick={(e) => e.preventDefault()}
            />
            <span className="edit-modal-lock">
              Lock <FaToggleOff />
            </span>
          </div>
          <div className="left-container-editBar-rightInfo">
            <MdContentCopy onClick={() => handleDuplicateClip(clip.id)} />
            <MdDeleteOutline id="delete-icon" onClick={() => handleRemoveClip(clip.id)} />
          </div>
        </div>
        {activeClip === clip.id && <p className="add-frame-btn" onClick={() => handleAddClip()}>+ Add Clip</p>}
        {
          <LeftBarModal
            clip={clip}
            openModal={isOpenLeftBarModal}
            setOpenLeftModal={setIsOpenLeftBarModal}
            handleAddClip={handleAddClip}
          />}
      </div>

    </Reorder.Item>
  );
}