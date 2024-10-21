import React, { useEffect, useState } from 'react';
import { MdManageHistory } from "react-icons/md";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaStrikethrough } from "react-icons/fa";
import { MdOutlineAlignHorizontalCenter } from "react-icons/md";
import { MdOutlineAlignVerticalCenter } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import "./Styles/TextSideBar.css";
import SelectDropdown from './SelectDropdown';
import useStudioStore, { StudioState } from '@/stores/studio';
import { TClip, TClipContent } from '@/remotion/textVideo/types';
import {DropdownList} from './SelectDropdown';
import { transform } from 'next/dist/build/swc';


const textColorLists: DropdownList[] = [
  {
    label: "Solid",
    value: "Solid"
  },
  {
    label: "Gradient",
    value: "Gradient"
  }
];

export default function TextSideBar() {
  const [activeContent, setActiveContent] = useState<TClipContent>();


  /**
   * Studio store states
   */
  const activeContentId = useStudioStore((state: StudioState) => state.activeContentId);
  const activeContentIndex = useStudioStore((state: StudioState) => state.activeContentIndex);
  const activeClipId = useStudioStore((state: StudioState) => state.activeClipId);

  const activeClipIndex = useStudioStore((state: StudioState) => state.activeClipIndex);
  const inputProp = useStudioStore((state: StudioState) => state.inputProp);
  /**
     * Studio store handlers
  */
  const updateFontSizeContent = useStudioStore((state: StudioState) => state.updateFontSizeContent);
  const updateTextDecorationContent = useStudioStore((state: StudioState) => state.updateTextDecorationContent);
  const updateFontStyleContent = useStudioStore((state: StudioState) => state.updateFontStyleContent);
  const updateFontWeightContent = useStudioStore((state: StudioState) => state.updateFontWeightContent);
  const updateFontColorContent = useStudioStore((state: StudioState) => state.updateFontColorContent);
  const updateTextShadowContent = useStudioStore((state: StudioState) => state.updateTextShadowContent);
  const updateTextAlignContent = useStudioStore((state: StudioState) => state.updateTextAlignContent);
  const updateGradientContent = useStudioStore((state: StudioState) => state.updateGradientContent);
  const updateHorizontalAlignContent = useStudioStore((state: StudioState) => state.updateHorizontalAlignContent);
  const updateVerticalAlignContent = useStudioStore((state: StudioState) => state.updateVerticalAlignContent);
  


  const shadowLists = [
    {
      name: "None",
      textShadow: "",
    },
    {
      name: "Shadow",
      textShadow: ".06em .06em 0 #00000050",
    },
    {
      name: "Stack",
      textShadow: ".06em .06em 0 rgba(var(--text-effect-color-rgb,74,222,128),.4), .12em .12em 0 rgba(var(--text-effect-color-rgb,74,222,128),.2)",
    },
    {
      name: "Stage",
      textShadow: "0 0 .2em #00000070",
    },
    {
      name: "Neon",
      textShadow: "0 0 .08em rgba(var(--text-effect-color-rgb,74,222,128),.56), 0 0 .05em rgba(var(--text-effect-color-rgb,74,222,128),.31), 0 0 .15em rgba(var(--text-effect-color-rgb,74,222,128),.78)",
    },
    {
      name: "Glitch",
      textShadow: ".04em .04em 0 #ff0050cc, .04em -.04em 0 #00f2eacc"
    }
  ];

  const gradientLists = [
    {
      gradient:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,94,121,1) 51%, rgba(0,212,255,1) 100%);"
    },
    {
      gradient:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,112,9,1) 0%, rgba(0,212,255,1) 100%)"
    },
    {
      gradient:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
    },
    {
      gradient:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(175,64,64,1) 0%, rgba(30,253,29,1) 100%, rgba(252,176,69,1) 100%)"
    },
    {
      gradient:"linear-gradient(90deg, rgba(255,16,254,1) 0%, rgba(175,64,64,1) 37%, rgba(252,176,69,1) 96%, rgba(247,178,68,1) 100%, rgba(242,180,67,1) 100%, rgba(30,253,29,1) 100%)"
    },

  ]

  const fontFamilyLists : DropdownList[] =[
    {
      label:"monospace",
      value:"monospace"
    },
    {
      label:"Times New Roman",
      value:"Times New Roman"
    },
    {
      label:"Helvetica",
      value:"Helvetica"
    },
    {
      label:"cursive",
      value:"cursive"
    },
    {
      label:"fantasy",
      value:"fantasy"
    },
  ]

  useEffect(() => {
    const clip = inputProp?.clips[activeClipIndex]
    const content = clip?.content[activeContentIndex];
    if (clip && content) {

      setActiveContent(content)
    }
  }, [inputProp.clips, activeClipIndex, activeContentIndex, activeContentId])


  function handleUpdateFontSizeContent(clipId: string, textId: string, value: string) {
    updateFontSizeContent(clipId, textId, value)
  }

  function handleUpdateTextDecoration(clipId: string, textId: string, value: string) {
    updateTextDecorationContent(clipId, textId, value);
  }

  function handleUpdateFontStyleContent(clipId: string, textId: string) {

    const fontStyle = activeContent?.style?.fontStyle === "italic" ? "" : "italic";
    updateFontStyleContent(clipId, textId, fontStyle);
  }

  function handleUpdateFontWeightContent(clipId: string, textId: string) {

    const fontWeight = activeContent?.style?.fontWeight === "bold" ? "" : "bold";
    updateFontWeightContent(clipId, textId, fontWeight);
  }

  function handleUpdateFontColor(clipId: string, textId: string, value: string) {
    updateFontColorContent(clipId, textId, value);
  }

  function handleUpdateTextShadowContent(clipId: string, textId: string, value: string){
      updateTextShadowContent(clipId, textId, value);
  }

  function handleTextAlignContent(clipId: string, textId: string, value: string){
    updateTextAlignContent(clipId, textId, value);
  }

  function handleUpdateGradientContent(clipId: string, textId: string, value: string){
    updateGradientContent(clipId, textId, value);
  }

  function handleUpdateHorizontalAlignContent(clipId: string, contentId: string){
    const value = {
      left: "50%",
      transform: "translateX(-50%)"
    }
    updateHorizontalAlignContent(clipId, contentId, value);
  }

  function handleUpdateVerticalAlignContent(clipId: string, contentId: string){
    const value = {
      top: "50%",
      transform: "translateY(-50%)"
    }

    updateVerticalAlignContent(clipId, contentId, value);
  }

  return (

    <>
      {
      }
      <div className="TextSideBar">
        <div className="TextSideBar-Heading">
          <h2>Text</h2>
        </div>
        <div className="TextSideBar-ColorContainer">
          <button className='Color-Code'>
            <input 
              className='Color-Code-Color'
              type="color"
              value={activeContent?.style?.color}
              onChange={(e) => handleUpdateFontColor(activeClipId, activeContentId, e.target.value)}
              style={{background: activeContent?.style?.color}}
            />
            <input
              className='Color-Code-Value'
              type="text"
              value={activeContent?.style?.color}
              onChange={(e) => handleUpdateFontColor(activeClipId, activeContentId, e.target.value)}
            />
          </button>
        </div>
        <hr className='TextBar-Line' />
        <div className="TextSideBar-FontStyle-Container">
          <div className="Font-Size">
            <p>Size</p>
            <input type="number"
              name=""
              id=""
              value={parseInt(activeContent?.style?.fontSize)}
              onChange={(e) => handleUpdateFontSizeContent(activeClipId, activeContentId, e.target.value)}
            />
          </div>
          <div className="Font-Family">
            <div className="Font-Family-Upper">
              <p>Font</p>
            </div>
            <SelectDropdown lists={fontFamilyLists} identifier="font-families"/>
          </div>
          <div className="Font-Alignment">
            <span className={`Font-Alignment-Icon ${activeContent?.style?.textAlign === "left" ? 'Font-Alignment-Icon-Active' : ''}`} 
            onClick={() => handleTextAlignContent(activeClipId, activeContentId, "left")}
            >
              <FaAlignLeft 
              className={`${activeContent?.style?.textAlign === "left" ? 'Font-Alignment-Icon-Svg-Active' : ''}`}/>
              </span>
            <span 
            className={`Font-Alignment-Icon ${activeContent?.style?.textAlign === "center" ? 'Font-Alignment-Icon-Active' : ''}`}
            onClick={() => handleTextAlignContent(activeClipId, activeContentId, "center")}
            >
              <FaAlignCenter className={`${activeContent?.style?.textAlign === "center" ? 'Font-Alignment-Icon-Svg-Active' : ''}`} />
            </span>
            <span 
            className={`Font-Alignment-Icon ${activeContent?.style?.textAlign === "right" ? 'Font-Alignment-Icon-Active' : ''}`}
            onClick={() => handleTextAlignContent(activeClipId, activeContentId, "right")}
            >
              <FaAlignRight className={`${activeContent?.style?.textAlign === "right" ? 'Font-Alignment-Icon-Svg-Active' : ''}`}/>
            </span>
          </div>
          <div className="Font-Style">
            <span
              className={`Font-Style-Icon ${activeContent?.style?.fontWeight === "bold" ? "Font-Style-Icon-Active" : ""}`}
              onClick={() => handleUpdateFontWeightContent(activeClipId, activeContentId)}
            >
              <FaBold className={`${activeContent?.style?.fontWeight === "bold" ? "Font-Style-Icon-Svg-Active" : ""}`}/>
            </span>
            <span
              className={`Font-Style-Icon ${activeContent?.style?.fontStyle === "italic" ? "Font-Style-Icon-Active" : ""}`}
              onClick={() => handleUpdateFontStyleContent(activeClipId, activeContentId)}
            >
              <FaItalic className={`${activeContent?.style?.fontStyle === "italic" ? "Font-Style-Icon-Svg-Active" : ""}`} />
            </span>
            <span
              className={`Font-Style-Icon ${activeContent?.style?.textDecoration?.includes("underline") ? "Font-Style-Icon-Active" : ""}`}
              onClick={() => handleUpdateTextDecoration(activeClipId, activeContentId, "underline")}
            >
              <FaUnderline className={`${activeContent?.style?.textDecoration?.includes("underline") ? "Font-Style-Icon-Svg-Active" : ""}`}/>
            </span>
            <span
             className={`Font-Style-Icon ${activeContent?.style?.textDecoration?.includes("line-through") ? "Font-Style-Icon-Active" : ""}`}
              onClick={() => handleUpdateTextDecoration(activeClipId, activeContentId, "line-through")}
            >
              <FaStrikethrough className={`${activeContent?.style?.textDecoration?.includes("line-through") ? "Font-Style-Icon-Svg-Active" : ""}`}/>
            </span>
          </div>
        </div>
        <hr className='TextBar-Line' />
        <div className="TextSideBar-Font-Effects">
          <h2>Effects</h2>
          <div className="Font-Effects-Container">
            {
              shadowLists.map((item, index) => (
                <div className='Font-Effects-Container-Box' key={index} 
                onClick={() => handleUpdateTextShadowContent(activeClipId, activeContentId, item.textShadow)}>
                  <div 
                  className={`Effect-Box ${activeContent?.style?.textShadow === item.textShadow ? 'Effect-Box-Active' : '' }`}
                  style={{textShadow:item.textShadow}}>Xy</div>
                  <p>{item.name}</p>
                </div>
              ))
            }
          </div>
        </div>
        <hr className='TextBar-Line' />
        <div className="TextSideBar-Alignment-Container">
          <p>Alignment</p>
          <div className="Alignment-Button-Container">
            <button 
            className="Center-Alignment"
            onClick={() => handleUpdateHorizontalAlignContent(activeClipId, activeContentId)}>
              <span className='Alignment-Btn-Icon'>
                <MdOutlineAlignHorizontalCenter 
                />
                </span>
              <span className='Alignment-Btn-Text'>Center</span>
            </button>
            <button 
            className="Center-Alignment"
            onClick={() => handleUpdateVerticalAlignContent(activeClipId, activeContentId)}>
              <span className='Alignment-Btn-Icon'>
                <MdOutlineAlignVerticalCenter 
                
                />
              </span>
              <span className='Alignment-Btn-Text'>Middle</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}