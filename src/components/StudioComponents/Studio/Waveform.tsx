import React, { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js';
import { CiPause1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import useStudioStore, { StudioState } from '@/stores/studio';


interface WaveSurferOptions {
  container: HTMLDivElement | string | undefined | null;
  waveColor: string;
  progressColor: string;
  cursorColor: string;
  responsive: boolean;
  height: number;
  normalize: boolean;
  backend: string;
  barWidth: number;
  barGap: number;
}


const formWaveSurferOptions = (ref: HTMLDivElement | undefined | null): WaveSurferOptions => {
  const container = ref ? ref : undefined;
  return {
    container: container, // reference to the position where wavesuffer instance should be displayed
    waveColor: '#213244',
    progressColor: '#0a60fb',
    cursorColor: 'transparent',
    responsive: true,
    height: 80,
    normalize: true,
    backend: 'WebAudio',
    barWidth: 2,
    barGap: 3,
  };
};


export default function Waveform({audioFile} : {audioFile: string}){
  const waveFormRef = useRef<HTMLDivElement | undefined>(null); // this will be the dom  where wavesuffere will be displayed
  const wavesurfer = useRef<WaveSurfer>(); // this will be used to access the wavesurfer instance we create without need to create new instance on every render (play, pause, stop)
  const [volume, setVolume] = useState();

  const setPlayerPlaying = useStudioStore((state: StudioState) => state.setPlayerPlaying);
  const playerPlaying = useStudioStore((state: StudioState) => state.playerPlaying);

  useEffect(() => {
      const options = formWaveSurferOptions(waveFormRef.current);
      if(options){
        wavesurfer.current = WaveSurfer.create(options as any);
      }


      //load the audio file
      wavesurfer.current?.load(audioFile);

      // when wavesurfer i ready
      wavesurfer.current?.on('ready', () =>{
        // setVolume(wavesurfer.current?.getVolume());
      })

      // update 

      return () =>{
        wavesurfer.current?.un('ready', ()=>{
          //callback function
        });
        wavesurfer.current?.destroy();
      }

  }, [audioFile])

  useEffect(() =>{
    if(playerPlaying){
      setPlayerPlaying(false);
    }
  },[])

  function handlePlayPause(){
    setPlayerPlaying(!playerPlaying);
  }

  return (
    <div style={{marginTop:"40px"}}>
  
    <div id='waveform' ref={waveFormRef as any} style={{width:"100%"}}>
        <button onClick={() => handlePlayPause()}>{playerPlaying ? <CiPause1/>   : <CiPlay1/>}</button>
    </div>
    </div>
  )
}
