import React, { useEffect, useState } from 'react';
import './Styles/BackgroundSidebar.css';
import SelectDropdown from './SelectDropdown';
import { IoMdAdd } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import useStudioStore, { StudioState } from '@/stores/studio';
import { TClip } from '@/remotion/textVideo/types';
import DialogBox from './DialogBox';
type DropdownList = {
  label: string,
  value: string
}
const backgroundColorLists: DropdownList[] = [
  {
    label: "Solid",
    value: "Solid"
  },
  {
    label: "Gradient",
    value: "Gradient"
  }
]

const gradientLists = [
  {
    gradient: "linear-gradient(135deg, rgb(255, 255, 255), rgb(238, 238, 238))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(232, 121, 249), rgb(142, 209, 252))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(10, 205, 254), rgb(70, 90, 248))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(255, 105, 0), rgb(232, 121, 249))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(34, 34, 34), rgb(136, 136, 136))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(249, 210, 33), rgb(243, 56, 1))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(212, 251, 122), rgb(146, 225, 155))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(240, 226, 206), rgb(241, 194, 180))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(234, 254, 250), rgb(119, 241, 209))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(86, 40, 196), rgb(41, 32, 147))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(214, 168, 197), rgb(173, 62, 205))"
  },
  {
    gradient: "linear-gradient(135deg, rgb(238, 151, 119), rgb(229, 118, 186))"
  },
]

const videoLists = [
  {
    url:"https://content.typeframes.com/gradients-min/4087ef40-a909-4502-8a94-63dd3eae540d.webm",
  },
  {
    url:"https://content.typeframes.com/gradients-min/f038699d-c547-4da4-8a56-961f263ecb27.webm"
  },
  {
    url:"https://content.typeframes.com/gradients-min/de836793-1e0a-4656-ba46-e7f9f5dd27d2.webm"
  },
  {
    url:"https://content.typeframes.com/gradients-min/4dadd93f-b43f-4cec-8624-6fb209e328cd.webm"
  },
  {
    url:"https://content.typeframes.com/gradients-min/2f86cec2-d54b-4ca5-bfdb-09d2c372ccf0.webm"
  },
  {
    url:"https://content.typeframes.com/gradients-min/203cb985-bc2f-42e9-a5f6-dbb1d0e67000.webm"
  },
  {
    url:"https://content.typeframes.com/gradients-min/e823ce1e-a266-4b72-abdd-b8f39eb935b6.webm"
  },
]

export default function BackgroundSidebar() {
  const [activeClip, setActiveClip] = useState<TClip>();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogType, setDialogType] = useState<string>("");


  /**
   * Studio store states
   */
  const activeClipId = useStudioStore((state: StudioState) => state.activeClipId);
  const inputProp = useStudioStore((state: StudioState) => state.inputProp);
  const activeClipIndex = useStudioStore((state: StudioState) => state.activeClipIndex);

  /**
   * Studio store handlers
   */
  const updateClipBackground = useStudioStore((state: StudioState) => state.updateClipBackground);
  const updateClipBackgroundVideo = useStudioStore((state: StudioState) => state.updateClipBackgroundVideo);

  function handleUpdateClipBackgroundColor(clipId: string, value: string) {
    updateClipBackground(clipId, value);
  }

  function handleUpdateClipBackgroundGradient(clipId: string, value: string){
    updateClipBackground(clipId, value);
  }

  function handleUpdateClipBackgroundVideo(clipId: string, value: string){
    updateClipBackgroundVideo(clipId, value);
  }

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
    


  useEffect(() => {
    const clip = inputProp.clips.find((item: TClip) => item.id === activeClipId);

    setActiveClip(clip);
  }, [inputProp.clips, activeClipId, activeClipIndex])

  return (
<>
    <div className="Background-Container">
      <div className="Background-Heading">
        <h2>Background</h2>
      </div>
      <div className="Background-Color-Container">
        <button className='Background-Color-Code'>
          <input
            className='Background-Color-Code-Color'
            type="color"
            value={activeClip?.background?.style?.backgroundColor}
            onChange={(e) => handleUpdateClipBackgroundColor(activeClip.id, e.target.value)}
            style={{ background: activeClip?.background?.style?.background }}
          />
          <input
            className='Background-Color-Code-Value'
            type="text"
            value={activeClip?.background?.style?.backgroundColor}
            onChange={(e) => handleUpdateClipBackgroundColor(activeClip.id, e.target.value)}
          />
        </button>
        <div className="Background-Color-Palette">
          {
            gradientLists.map((item, index) => (
              <div 
              className="Background-Color-Palette-Box" 
              key={index}
              style={{background: item.gradient}}
              onClick={() => handleUpdateClipBackgroundGradient(activeClip.id, item.gradient)}
              >

              </div>
            ))
          }
        </div>
      </div>
      <hr className='Background-Line' />
      <div className="Background-Gradients-Wrapper">
        <p >Animated Gradients</p>
        <div className="Background-Gradients-Container">
          {
            videoLists.map((item, index ) => (
              <div 
              className="Background-Gradient" 
              key={index}
              onClick={() => handleUpdateClipBackgroundVideo(activeClip.id, item.url)}
              >
                <video  autoPlay muted loop>
                  <source src={item.url}/>
                </video>
              </div>
            ))
          }
        </div>
      </div>
      <button className="Background-Media-Btn">
        <span className='Background-Media-Btn-Icon'><IoMdAdd /></span>
        <span className='Background-Media-Btn-Text' onClick={() => openDialog("Video")}>Add Media</span>
      </button>
    </div>
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