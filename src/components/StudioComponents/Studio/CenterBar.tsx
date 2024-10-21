"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Styles/CenterBar.css";
import AspectRatioDropdown from "./AspectRatioDropdown";
import { TClip, TClipContent } from "@/remotion/textVideo/types";
import RemotionPlayer from "@/components/TemplateComposer/RemotionPlayer";
import useStudioStore, { StudioState } from "@/stores/studio";
import { MdOutlineRedo } from "react-icons/md";
import { IoMdUndo } from "react-icons/io";
import { PiLightningBold } from "react-icons/pi";
import { BiExport } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { nextFetch } from "@/lib/fetch";
import Image from "next/image";
import useDraggable from "../../../hooks/useDraggable";
import ResizeHook from "@/hooks/resizeHook";
import Waveform from "./Waveform";

import { IoSaveOutline } from "react-icons/io5";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function CenterBar() {
  const [projectName, setProjectName] = useState("Amazing Project");
  const [selected, setSelected] = useState<string>("");
  const [currentActiveClip, setCurrentActiveClip] = useState<TClip | {}>({});
  const dRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const activeContentId = useStudioStore(
    (state: StudioState) => state.activeContentId
  );
  const params = useParams<{ projectId: string,templateId?:string }>();
  
  /**
   * Studio Store States
   */
  const activeClipId = useStudioStore(
    (state: StudioState) => state.activeClipId
  );
  const activeClipIndex = useStudioStore(
    (state: StudioState) => state.activeClipIndex
  );
  const inputProp = useStudioStore((state: StudioState) => state.inputProp);
  const activeContentIndex = useStudioStore(
    (state: StudioState) => state.activeContentIndex
  );

  const playerWidth = useStudioStore((state: StudioState) => state.playerWidth);
  const playerHeight = useStudioStore(
    (state: StudioState) => state.playerHeight
  );
  const playerPlaying = useStudioStore(
    (state: StudioState) => state.playerPlaying
  );

  /**
   * Studio Store Handlers
   */
  const setActiveClip = useStudioStore(
    (state: StudioState) => state.setActiveClip
  );
  const setActiveClipIndex = useStudioStore(
    (state: StudioState) => state.setActiveClipIndex
  );
  const setActiveContentId = useStudioStore(
    (state: StudioState) => state.setActiveContentId
  );
  const setActiveContentIndex = useStudioStore(
    (state: StudioState) => state.setActiveContentIndex
  );

  useEffect(() => {
    setCurrentActiveClip(
      inputProp.clips.find((clip: TClip) => clip.id === activeClipId)
    );
    // setActiveContentIndex(0);
  }, [activeClipId, inputProp.clips, currentActiveClip]);

  const DraggableFunctions = useDraggable(dRef, parentRef);
  const ResizeHookFunctions = ResizeHook(dRef, parentRef);

  /**
   * This handler go to next clip at center screen
   *
   */
  function handleNextActiveClip() {
    if (activeClipIndex < inputProp.clips.length - 1) {
      setActiveClipIndex(activeClipIndex + 1);
      setActiveClip(inputProp?.clips[activeClipIndex + 1]?.id);
    }
  }

  /**
   * This handler go to previous clip at center screen
   *
   */
  function handlePreviousActiveClip() {
    if (activeClipIndex > 0) {
      setActiveClipIndex(activeClipIndex - 1);
      setActiveClip(inputProp?.clips[activeClipIndex - 1]?.id);
    }
  }

   /**
   * This handler used to save the template to database
   *
   */
  async function handleSaveTemplate() {
    console.log(params);
    if(!params.templateId) toast.error("No Template Id Found!");
    const resp = await nextFetch(`/api/template`, {
      method: "PATCH",
      body: JSON.stringify({
        id:  params.templateId,
        props: inputProp,
        name: projectName,
      }),
    });
    if(resp.ok) toast.success("Template Saved Successfully!");
    else toast.error("Failed to save template!");
    
  }
  /**
   * This handler sets active content id
   *
   */
  function handleSetActiveContentId(contentId: string, index: number) {
    setActiveContentId(contentId);
    setActiveContentIndex(index);
  }

  /**
   * This hook is used to deselect the activeContent
   *
   */
  useEffect(() => {
    const mainFrame = document.querySelector(
      ".Center-Container-MainFrame-Screen"
    );
    const handleClick = () => {
      handleSetActiveContentId("", -1);
    };
    if (mainFrame) {
      mainFrame.addEventListener("click", handleClick);
      return () => {
        mainFrame.removeEventListener("click", handleClick);
      };
    }
  }, [activeClipIndex]);

  return (
    <>
      <div className="Center-Container">
        <div className="Center-Container-Header">
          <div className="Center-Container-Header-Left">
            <input
              className="ProjectName"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="Center-Container-Header-Right">
            <div className="Center-Container-Header-Right-First">
              <div className="Auto-Improve">
                <span className="Auto-Improve-Icon">
                  <PiLightningBold />
                </span>
                <span className="Auto-Improve-Text">Auto Improve</span>
              </div>
              <div className="Undo-Redo-Btns">
                <IoMdUndo />
                <MdOutlineRedo />
              </div>
            </div>
            <hr className="Line" />
            <div className="Center-Container-Header-Right-Second">
              <AspectRatioDropdown
                selected={selected}
                setSelected={setSelected}
              />
              <button className="Export-Btn">
                <span className="Export-Btn-Text">Export</span>
                <span>
                  <BiExport />
                </span>
              </button>
              { <button className="Save-Template-Btn" onClick={handleSaveTemplate}>
                <span className="Save-Template-Btn-Text">Save As Template</span>
                {/* <span>
                  <IoSaveOutline />
                </span> */}
              </button>}
            </div>
          </div>
        </div>
        <div className="Center-Container-MainFrame-Screen">
          {playerPlaying ? (
            <div
              className={`Center-Container-MainFrame-Screen-Frame 
            ${playerPlaying ? "Disabled-MainFrame-Screen-Frame" : ""}`}
              style={{ width: playerWidth, height: playerHeight }}
            >
              <RemotionPlayer
                inputProps={inputProp}
                size={{
                  width: parseInt(playerWidth),
                  height: parseInt(playerHeight),
                }}
                options={{ controls: true }}
              />
            </div>
          ) : (
            <div
              className={`Center-Container-MainFrame-Screen-Frame ${
                playerPlaying ? "Disabled-MainFrame-Screen-Frame" : ""
              }`}
              style={{
                backgroundColor: currentActiveClip?.background?.value,
                background: currentActiveClip?.background?.value,
                width: playerWidth,
                height: playerHeight,
              }}
              ref={parentRef}
            >
              {currentActiveClip &&
                currentActiveClip?.background?.type === "video" && (
                  <>
                    {console.log(
                      "url - ",
                      currentActiveClip?.background?.value
                    )}
                    <video
                      key={currentActiveClip?.background?.value}
                      autoPlay
                      muted
                      loop
                      className="Center-Container-MainFrame-Video"
                    >
                      <source
                        src={
                          currentActiveClip?.background?.value
                            ? currentActiveClip?.background?.value
                            : ""
                        }
                      />
                    </video>
                  </>
                )}

              {!playerPlaying &&
                currentActiveClip?.content &&
                currentActiveClip?.content?.map(
                  (item: TClipContent, index: number) => {
                    return (
                      <div
                        key={index}
                        className="activeContentWrapper"
                        ref={activeContentIndex === index ? dRef : null}
                        onMouseDown={(e: React.MouseEvent<HTMLDivElement>) =>
                          DraggableFunctions.onMouseDown(e)
                        }
                        style={{
                          ...item.style,
                          border: `${
                            activeContentIndex === index
                              ? "1px solid #0a60fb"
                              : ""
                          }`,
                          height:
                            item.type !== "text"
                              ? typeof item.style.height == "string"
                                ? item?.style?.height
                                : item?.style?.height?.toString() + "px"
                              : "",
                          width:
                            item.type !== "text"
                              ? typeof item.style.width == "string"
                                ? item?.style?.width
                                : item?.style?.width?.toString() + "px"
                              : "",
                          top:
                            typeof item.style.top == "string"
                              ? item?.style?.top
                              : item?.style?.top?.toString() + "px",
                          left:
                            typeof item.style.left == "string"
                              ? item?.style?.left
                              : item?.style?.left?.toString() + "px",
                        }}
                        onClick={() => handleSetActiveContentId(item.id, index)}
                        data-index={index}
                      >
                        {item.type !== "text" && (
                          <rect
                            id="LeftTopCornerDiv"
                            style={{
                              display: `${
                                activeContentIndex === index ? "block" : "none"
                              }`,
                            }}
                            data-index={index}
                            className="LeftTopCornerDiv"
                            onMouseDown={(e: React.MouseEvent<SVGElement>) =>
                              ResizeHookFunctions.onMouseDown(e)
                            }
                          ></rect>
                        )}
                        {item.type !== "text" && (
                          <rect
                            id="RightTopCornerDiv"
                            style={{
                              display: `${
                                activeContentIndex === index ? "block" : "none"
                              }`,
                            }}
                            data-index={index}
                            className="RightTopCornerDiv"
                            onMouseDown={(e: React.MouseEvent<SVGElement>) =>
                              ResizeHookFunctions.onMouseDown(e)
                            }
                          ></rect>
                        )}
                        {item.type !== "text" && (
                          <rect
                            id="LeftBottomCornerDiv"
                            style={{
                              display: `${
                                activeContentIndex === index ? "block" : "none"
                              }`,
                            }}
                            data-index={index}
                            className="LeftBottomCornerDiv"
                            onMouseDown={(e: React.MouseEvent<SVGElement>) =>
                              ResizeHookFunctions.onMouseDown(e)
                            }
                          ></rect>
                        )}
                        {item.type !== "text" && (
                          <rect
                            id="RightBottomCornerDiv"
                            style={{
                              display: `${
                                activeContentIndex === index ? "block" : "none"
                              }`,
                            }}
                            data-index={index}
                            className="RightBottomCornerDiv"
                            onMouseDown={(e: React.MouseEvent<SVGElement>) =>
                              ResizeHookFunctions.onMouseDown(e)
                            }
                          ></rect>
                        )}
                        {item.type === "text" && (
                          <p
                            data-index={index}
                            key={index}
                            // ref={activeContentIndex === index ? pRef : null}
                            // onMouseDown={onMouseDown}
                            style={{
                              fontSize: item?.style?.fontSize,
                              textDecoration: item.style.textDecoration,
                              fontStyle: item.style.fontStyle,
                            }}
                            className="Center-Container-MainFrame-Screen-Text"
                          >
                            {item.data}
                          </p>
                        )}
                        {item.type === "image" && (
                          <Image
                            src={item.data}
                            alt="Sticker"
                            // width={parseInt(item?.style?.width)}
                            // height={parseInt(item?.style?.height)}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                            fill={true}
                            // ref={activeContentIndex === index ? imageRef : null}
                            data-index={index}
                            // onMouseDown={onMouseDown}
                            // onClick={() => handleSetActiveContentId(item.id, index)}
                            className="Center-Container-MainFrame-Screen-Image"
                          />
                        )}
                        {item.type === "video" && (
                          <video
                            src={item.data}
                            autoPlay
                            // width={item?.style?.width}
                            // height={item?.style?.height}
                            data-index={index}
                            // ref={activeContentIndex === index ? videoRef : null}
                            // onClick={() => handleSetActiveContentId(item.id, index)}
                            className="Center-Container-MainFrame-Screen-Video"
                          ></video>
                        )}
                        {item.type === "lottie" && (
                          <video
                            src={item.data}
                            autoPlay
                            width={item?.style?.width}
                            height={item?.style?.height}
                            data-index={index}
                            // ref={activeContentIndex === index ? lottieRef : null}
                            onClick={() =>
                              handleSetActiveContentId(item.id, index)
                            }
                            className="Center-Container-MainFrame-Screen-Lottie"
                          ></video>
                        )}
                      </div>
                    );
                  }
                )}
            </div>
          )}
          <div className="Center-Container-MainFrame-Screen-Details">
            <button
              className={`Prev-Btn 
              ${activeClipIndex === 0 ? "Disable-Btn" : ""}`}
              onClick={() => handlePreviousActiveClip()}
            >
              <span
                className={`Prev-Btn-Icon 
              ${activeClipIndex === 0 ? "Disable-Btn-Icon" : ""}`}
              >
                <IoArrowBackOutline />
              </span>
              <span
                className={`Prev-Btn-Text 
              ${activeClipIndex === 0 ? "Disable-Btn-Text" : ""}`}
              >
                Prev
              </span>
            </button>
            <p className="Total-Frames">
              Clip {activeClipIndex + 1}/{inputProp.clips.length}
            </p>
            <button
              className={`Next-Btn 
              ${
                activeClipIndex === inputProp.clips.length - 1
                  ? "Disable-Btn"
                  : ""
              }`}
              onClick={() => handleNextActiveClip()}
            >
              <span
                className={`Next-Btn-Text 
              ${
                activeClipIndex === inputProp.clips.length - 1
                  ? "Disable-Btn-Text"
                  : ""
              }`}
              >
                Next
              </span>
              <span
                className={`Next-Btn-Icon 
              ${
                activeClipIndex === inputProp.clips.length - 1
                  ? "Disable-Btn-Icon"
                  : ""
              }`}
              >
                <IoArrowForward />
              </span>
            </button>
          </div>
        </div>
        {/* <Waveform audioFile={AudioFile} /> */}
      </div>
    </>
  );
}
