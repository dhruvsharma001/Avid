import useStudioStore, { StudioState, TransitionType } from '@/stores/studio'
import React, { useEffect, useState } from 'react';
import './Styles/TransitionSidebar.css';
import { TClip } from '@/remotion/textVideo/types';


export default function TransitionSideBar(){
  const [activeClip, setActiveClip] = useState<TClip>();
  const [animationKey, setAnimationKey] = useState(0);
  const [activeBtnIndex, setActiveBtnIndex] = useState("");
  const [activeTransition, setActiveTransition] = useState('');

  const activeClipId = useStudioStore((state: StudioState) => state.activeClipId);
  const inputProp = useStudioStore((state: StudioState) => state.inputProp);

  const updateClipTransition = useStudioStore((state: StudioState) => state.updateClipTransition);

  useEffect(() => {
    if(activeClip?.transition?.type){

      setActiveTransition(activeClip?.transition?.type)
    }
  }, [activeClip])

  function handleUpdateClipTransition(clipId: string, type: TransitionType, duration: number){
    updateClipTransition(clipId, type, duration);
    // Toggle animationKey to force animation restart
    setAnimationKey((prevKey) => prevKey + 1);
    setActiveBtnIndex(clipId);
    setActiveTransition(type); // Set active transition type
  }

  useEffect(() => {
    setActiveClip(inputProp?.clips?.find((clip) => clip.id === activeClipId));
  }, [inputProp.clips, activeClipId, setActiveClip])

  return (
    <>
      <div className="Transition-Box">
        <h3 className="Transition-Box-Text">Transitions</h3>
        <div className="Transition-Box-Area" >
          {/* <h2>A</h2>
          <h2>B</h2> */}
          <div className="Transition-Box-Area-Slide1">A</div>
          <div key={animationKey} className={`Transition-Box-Area-Slide2 ${activeClip?.transition?.type === "fade" ? 'Animation-Fade' : ''} ${activeClip?.transition?.type === "wipe" ? 'Animation-Wipe' : ''} ${activeClip?.transition?.type === "flip" ? 'Animation-Flip' : ''}  ${activeClip?.transition?.type === "slide" ? 'Animation-Slide' : ''}`}>B</div>
        </div>
      </div>
      <div className="Preview-Container">
        <h3 className="Preview-Container-Text">Preview</h3>
        <div className="Preview-Container-Btns">
          <button 
          className={activeTransition === 'none' ? 'Transition-Active' : ''}
          onClick={() => handleUpdateClipTransition(activeClipId, 'none', 2)}>None</button>
          <button 
          className={activeTransition === 'fade' ? 'Transition-Active' : ''}
          onClick={() => handleUpdateClipTransition(activeClipId, 'fade', 2)}>Fade</button>
          <button 
          className={activeTransition === 'wipe' ? 'Transition-Active' : ''}
          onClick={() => handleUpdateClipTransition(activeClipId, 'wipe', 2)}>Wipe</button>
          <button 
          className={activeTransition === 'flip' ? 'Transition-Active' : ''}
          onClick={() => handleUpdateClipTransition(activeClipId, 'flip', 2)}>Flip</button>
          <button 
          className={activeTransition === 'slide' ? 'Transition-Active' : ''}
          onClick={() => handleUpdateClipTransition(activeClipId, 'slide', 2)}>Slide</button>
        </div>
      </div>
    </>
  )
}
