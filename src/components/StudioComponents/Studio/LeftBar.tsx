"use client";
import "./Styles/LeftBar.css";
import LeftClip from "./LeftClip";
import useStudioStore, { StudioState } from "@/stores/studio";
import { TClip } from "@/remotion/textVideo/types";
import { Reorder } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { MotionConfig } from 'framer-motion'

export default function LeftBar() {

  // Studio store states
  const clips: TClip[] = useStudioStore((state: StudioState) => state.inputProp.clips);
  // Studio Store handlers
  const addNewClip = useStudioStore((state: StudioState) => state.addNewClip);
  const reorderClips = useStudioStore((state: StudioState) => state.reorderClips);

  function handleAddClip() {
    const newClip: TClip = {
      id: uuidv4(),
      content: [
        {
          id: uuidv4(),
          type: 'text',
          data: 'New Text',
          style:{
            position:"absolute",
            top:"0px",
            left:"0px",
            fontSize:"24px",
            width:"100px",
            height:"80px",
        }
        }
      ],
      duration: 0.3
    }

    addNewClip(newClip);
}


  function handleUpdate(newUpdate: TClip[]) {
    reorderClips(newUpdate);
  }
  
  return (
    <>
      <MotionConfig reducedMotion="always">
        <Reorder.Group axis="y" values={clips} onReorder={(newUpdate) => handleUpdate(newUpdate)} className="left-main-container">
          {
            clips?.map((val: TClip, index: number) => (
              <LeftClip key={val.id} clip={val} handleAddClip={handleAddClip} clipIndex={index}/>
            ))
          }
        </Reorder.Group>
      </MotionConfig>
    </>
  );
}
