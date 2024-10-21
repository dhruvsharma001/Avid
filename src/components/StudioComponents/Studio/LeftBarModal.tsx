import React, { useEffect, useRef, useState } from 'react';
import { LuFrame } from "react-icons/lu";
import { MdFormatColorText } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { RiEmojiStickerLine } from "react-icons/ri";
import { RiStarSmileLine } from "react-icons/ri";
import { MdMusicVideo } from "react-icons/md";
import "./Styles/LeftBarModal.css";
import useStudioStore, { StudioState } from '@/stores/studio';
import { TClip } from '@/remotion/textVideo/types';
import {v4 as uuidv4} from "uuid";
import DialogBox from './DialogBox';

type LeftBarModalProps = {
  clip: TClip,
  openModal: boolean,
  setOpenLeftModal: React.Dispatch<React.SetStateAction<boolean>>,
  handleAddClip: () => void,
}

function LeftBarModal(props: LeftBarModalProps) {
   const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
   const [dialogType, setDialogType] = useState<string>("");
   const leftModalRef = useRef<HTMLUListElement>(null);
   const openModal = props.openModal;
   const setOpenLeftModal = props.setOpenLeftModal;
   const handleAddClip = props.handleAddClip;

   /**
    * Studio Store States
    */
   const activeClipId = useStudioStore((state: StudioState) => state.activeClipId);
 
   /**
    * Studio Store Handlers
    */
   const addNewTextContent = useStudioStore((state: StudioState) => state.addNewTextContent);
 
   /**
    * This handler opens the dialog box
    */
   const openDialog = (type: string) => {
     setIsDialogOpen(true);
     setDialogType(type);
   };
 
   /**
    * This handler closes the dialog box
    */
   const closeDialog = () => {
     setIsDialogOpen(false);
     setDialogType("");
   };
 
   /**
    * This handler add the new text content within the clip
    * @param {string} clipId - Clip Id of the clip
    */
   function handleAddNewTextContent(clipId: string) {
     addNewTextContent(clipId);
   }



    /**
   * This useEffect is used to handle Left Modal
   */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (leftModalRef.current && !leftModalRef.current?.contains(e.target as Node)) {
        setOpenLeftModal(false);
      }
    }

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    }
  }, [openModal, setOpenLeftModal])
  return (
   <>
      <ul  id='custom' className={`Custom-Dropdown ${openModal ? 'Custom-Dropdown-Active' :''}`} ref={leftModalRef}>
        <li className="Custom-Dropdown-Item" onClick={() => handleAddClip()}>
          <span className="Custom-Dropdown-Item-Icon">
            <LuFrame />
          </span>
          <span className="Custom-Dropdown-Item-Text">Clip</span>
        </li>
        <li className="Custom-Dropdown-Item" onClick={() => handleAddNewTextContent(activeClipId)}>
          <span className="Custom-Dropdown-Item-Icon">
            <MdFormatColorText />
          </span>
          <span className="Custom-Dropdown-Item-Text">Text</span>
        </li>
        <li
          onClick={() => openDialog("Video")}
          className="Custom-Dropdown-Item"
        >
          <span className="Custom-Dropdown-Item-Icon">
            <GoVideo />
          </span>
          <span className="Custom-Dropdown-Item-Text">video</span>
        </li>
        <li
          onClick={() => openDialog("Sticker")}
          className="Custom-Dropdown-Item"
        >
          <span className="Custom-Dropdown-Item-Icon">
            <RiEmojiStickerLine />
          </span>
          <span className="Custom-Dropdown-Item-Text">Sticker</span>
        </li>
        <li
          onClick={() => openDialog("Animation")}
          className="Custom-Dropdown-Item"
        >
          <span className="Custom-Dropdown-Item-Icon">
            <RiStarSmileLine />
          </span>
          <span className="Custom-Dropdown-Item-Text">Animation</span>
        </li>
        <li className="Custom-Dropdown-Item">
          <span className="Custom-Dropdown-Item-Icon">
            <MdMusicVideo />
          </span>
          <span className="Custom-Dropdown-Item-Text">
            Sound Effect
          </span>
        </li>
      </ul>
      {isDialogOpen && (
        <DialogBox
          isOpen={isDialogOpen}
          onClose={closeDialog}
          type={dialogType}
        />
      )}
   </>
  )
}

export default LeftBarModal
