import React from 'react';
import './Styles/AudioSidebar.css';
import SelectDropdown, { DropdownList } from './SelectDropdown';
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import useStudioStore, { StudioState } from '@/stores/studio';



const musicLists: DropdownList[] = [
  {
    label: "Don't Blink",
    value: "Don't Blink",
  },
  {
    label: "Snaps",
    value: "Snaps",
  },
  {
    label: "Stomps",
    value: "Stomps",
  },
]

const soundLists: DropdownList[] = [
  {
    label: "Fast Whoosh",
    value: "Fast Whoosh",
  },
  {
    label: "Airplane",
    value: "Airplane",
  },
  {
    label: "Bell Boom",
    value: "Bell Boom",
  },
]

export default function AudioSideBar(){
  const updateClipAudioSource = useStudioStore((state: StudioState) => state.updateClipAudioSource);

  function handleUpdateClipAudioSource(clipId: string, value: string, volume?: number, loop?: boolean){
    updateClipAudioSource(clipId, value, volume, loop);
  }
  
  return (
    <div className="Audio-Container">
      <div className="Audio-Heading">
        <h2 className="Audio-Text">Audio</h2>
      </div>
      <div className="Audio-Content-Container">
        <h3 className='Background-Music-Text'>Background Music</h3>
        <div className="Range-Slider-Wrapper">
          <span>22%</span>
          <input type="range" min="1" max="100" className="Slider" id="myRange" />
        </div>
        <SelectDropdown lists={musicLists} identifier="musicLists"/>
        <h4 className='Sound-Effect-Text'>Sound Effect</h4>
        <SelectDropdown lists={soundLists} identifier=""/>
        <p className="Voice-Over-Text">Voice Over</p>
        <div className="Upload-Audio-Wrapper">
          <div className="Upload-Audio-Content">
          <FaCloudUploadAlt/>
          <p>Drop a custom voice or <strong>click here</strong> to browse files.</p>
          </div>
        </div>
        <div className="Generate-Voice-Btn-Wrapper">
          <button className="Generate-Voice-Btn"><IoMdAdd /> Generate Voice</button>
        </div>
      </div>
    </div>
  )
}