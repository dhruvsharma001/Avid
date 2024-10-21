"use client";
import "./Styles/RightBar.css";
import { useState, useEffect, useRef } from "react";

/* Icons */
import { MdLayers } from "react-icons/md";
import { MdOutlineTextFields } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import { MdMusicVideo } from "react-icons/md";
import { MdAutofpsSelect } from "react-icons/md";

/* SideBar Tabs */
import TextSideBar from './TextSideBar';
import AISidebar from './AISidebar';
import AudioSideBar from './AudioSidebar';
import BackgroundSidebar from './BackgroundSidebar';
import TransitionSideBar from './TransitionSideBar';
import useStudioStore, { StudioState } from "@/stores/studio";
import { TClip, TClipContent } from "@/remotion/textVideo/types";

export default function RightBar() {
  const [activeTab, setActiveTab] = useState("Transition");
  const rightRef = useRef<HTMLDivElement>(null);
  const activeContentId = useStudioStore((state: StudioState) => state.activeContentId);
  const inputProp = useStudioStore((state: StudioState) => state.inputProp);
  const activeClipId = useStudioStore((state: StudioState) => state.activeClipId);

  useEffect(() =>{
    const clip =  inputProp.clips.find((clip: TClip) => clip.id === activeClipId);
    const content = clip.content.find((item : TClipContent) => item.id === activeContentId && item.type === "text")
    if(activeContentId.length >1 && content && clip){
      setActiveTab("Text");
    }
  }, [activeContentId])
  function handleOnClick(id: string) {
    setActiveTab(id);
  }

  useEffect(()=>{
    const mainFrame = document.querySelector(".Center-Container-MainFrame-Screen");
    const handleClick = ()=>{
      setActiveTab("Background")
    }
    if(mainFrame){
      mainFrame.addEventListener('click',handleClick);
      return ()=>{
        mainFrame.removeEventListener('click',handleClick)
      }
    }
  },[activeTab])

  useEffect(() => {
    if (rightRef.current) {
      rightRef.current.scrollTop = 0;
    }
  }, [activeTab])

  const tabs = [
    { id: "Transition", icon: MdLayers },
    { id: "Text", icon: MdOutlineTextFields, },
    { id: "Background", icon: IoImageOutline, },
    { id: "AI", icon: MdAutofpsSelect, },
    { id: "Audio", icon: MdMusicVideo, },

  ];

  const renderComponent = () => {
    switch (activeTab) {
      case "Text":
        return <TextSideBar />;
      case "AI":
        return <AISidebar />;
      case "Background":
        return <BackgroundSidebar />;
      case "Audio":
        return <AudioSideBar />;
      default:
        return <TransitionSideBar />;
    }
  };


  return (
    <div className="Right-Container" >
      <div className="Icons-Container">
        {
          tabs.map((item, index) => (
            <div key={index}
              className={`Icons-Container-Icon ${activeTab === item.id ? 'Icons-Active' : ''}`}
              onClick={() => handleOnClick(item.id)}>
              <item.icon />
            </div>
          ))
        }
      </div>
      {
        <div ref={rightRef} className="Right-Content-Wrapper">
          {renderComponent()}
        </div>
      }
    </div>
  );
}
