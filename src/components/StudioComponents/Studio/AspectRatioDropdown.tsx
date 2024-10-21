"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Styles/AspectRatioDropdown.css";
import { MdOutlineComputer } from "react-icons/md";
import { MdOutlineTv } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { MdOutlineCropDin } from "react-icons/md";
import { MdOutlineUnfoldMore } from "react-icons/md";
import useStudioStore, { StudioState } from "@/stores/studio";
interface DropdownProps {
  selected: string;
  setSelected: (option: string) => void;
}

export default function AspectRatioDropdown(props : DropdownProps){
  const selected = props.selected;
  const setSelected = props.setSelected;
  const [isActive, setIsActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const setPlayerPlaying = useStudioStore((state: StudioState) => state.setPlayerPlaying);
  const setPlayerResolution = useStudioStore((state: StudioState) => state.setPlayerResolution);


  const options: { icon: JSX.Element; text: string, playerResolution:{ width: string, height: string} }[] = [
    {
      icon: <MdOutlineComputer />,
      text: "16:9",
      playerResolution:{
        width: "646px",
        height: "365px",
      },
    },
    {
      icon: <MdOutlineTv />,
      text: "4:3",
      playerResolution:{
        width:"486px",
        height:"365px"
      },
    },
    {
      icon: <MdOutlineCropDin/>,
      text: "1:1",
      playerResolution:{
        width:"365px",
        height:"365px"
      },
    },
    {
      icon: <MdSmartphone />,
      text: "4:5",
      playerResolution:{
        width:"292px",
        height:"365px"
      },
    },
    {
      icon: <MdSmartphone />,
      text: "9:16",
      playerResolution:{
        width:"205px",
        height:"365px"
      },
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

 useEffect(() => {
  function handleUpdateResolution(){
    setPlayerPlaying(false);
    const option = options.find((item) => item.text === selected);
    if(option){

      const { width, height } = option?.playerResolution;
      setPlayerResolution(width, height);
    }
  }

  if (selected) {
    handleUpdateResolution();
  }
}, [selected, setPlayerResolution]);


  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        <span className="dropdown-icon">
          {selected ? (
            options.find((option) => option.text === selected)?.icon
          ) : (
            <MdOutlineComputer />
          )}
        </span>
        <span className="dropdown-text">{selected || "16:9"}</span>

          <p className="dropdown-unnfold-icon"><MdOutlineUnfoldMore /></p>

      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option.text}
              onClick={() => {
                setSelected(option.text);
                setIsActive(false);
              }}
              className={`dropdown-item ${
                option.text === selected ? "selected" : ""
              }`}
            >
              {option.icon}
              <p className="dropdown-content-text">{option.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};