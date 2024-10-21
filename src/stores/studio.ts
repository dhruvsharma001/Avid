import { create} from 'zustand';
import { TInput, TClip, TClipContent } from '@/remotion/textVideo/types';
import { devtools, persist } from 'zustand/middleware';
import { produce } from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

export type TransitionType = 'none' | 'fade' | 'wipe' | 'flip' | 'slide';

export interface StudioState {
    inputProp: TInput,
    activeClipId: string,
    activeClipIndex: number,
    activeContentIndex: number,
    activeContentId: string,
    playerWidth: string,
    playerHeight: string,
    playerPlaying: boolean,
    setInitialClip : (inputProp : TInput) => void,
    setActiveClip: (activeClipId: string) => void,
    setActiveClipIndex: (activeClipIndex: number) => void,
    setActiveContentIndex: (activeContentIndex :  number) => void,
    setActiveContentId: (contentId : string) => void,
    setPlayerResolution: (width: string, height: string) => void,
    setPlayerPlaying: (value:boolean) => void,
    addNewClip: (clip: TClip) => void;
    reorderClips: (newOrder: TClip[]) => void,
    removeClip: (clipId: string) => void;
    duplicateClip: (clipId: string) => void;
    addNewTextContent: (clipId: string) => void;
    updateTextContent: (clipId: string, textId: string, text: string) => void;
    removeTextContent: (clipId: string, textId: string) => void;
    updateClipDuration: (clipId: string, duration: number) => void;
    addImageContent: (clipId: string, url: string) => void;
    removeAllImagesContent: (clipId: string) => void;
    addVideoContent: (clipId: string, url: string) => void;
    removeAllVideosContent: (clipId: string) => void;
    addLottieContent: (clipId: string, url: string) => void;
    removeAllLottiesContent: (clipId: string) => void;
    updateContentPosition: (left: string, top: string) => void,
    updateContentSize: (width: string, height: string) => void,
    updateFontSizeContent: (clipId: string, textId : string, value: string) => void,
    updateTextDecorationContent: (clipId: string, textId : string, value: string ) => void,
    updateFontStyleContent: (clipId: string, textId: string, value: string) => void,
    updateFontWeightContent: (clipId: string, textId: string, value: string) => void,
    updateFontColorContent: (clipId: string, textId: string, value: string) => void,
    updateTextShadowContent: (clipId: string, textId: string, value: string) => void,
    updateFontFamilyContent: (clipId: string, textId: string, value: string) => void,
    updateTextAlignContent: (clipId: string, textId: string, value: string) => void,
    updateGradientContent: (clipId: string, textId: string, value: string) => void,
    updateHorizontalAlignContent: (clipId: string, contentId: string, value: Object) => void,
    updateVerticalAlignContent: (clipId: string, contentId: string, value: Object) => void,
    updateClipTransition: (clipId: string,type: TransitionType, duration: number) => void,
    updateClipBackground: (clipId: string, value: string) => void,
    updateClipBackgroundVideo: (clipId: string, value: string) => void,
    updateClipAudioSource: (clipId: string, value: string, volume?: number, loop?: boolean) => void,
}

const useStudioStore = create<StudioState>()(
    devtools(
        persist(
            (set) => ({
                inputProp :{
                    clips:[]
                },
                activeClipId: '',
                activeContentId:'',
                activeClipIndex: -1,
                activeContentIndex: 0,
                playerWidth:"646px",
                playerHeight:"365px",
                playerPlaying: false,
                setInitialClip: (newInputProp : TInput) => set(
                    produce((state: StudioState) => {
                        state.inputProp = newInputProp
                    })
                ),
                setActiveClip: (activeClipId: string) => set(
                    produce((state : StudioState) => {
                        state.activeClipId = activeClipId
                    })
                ),
                setActiveClipIndex: (activeClipIndex : number) => set(
                    produce((state :  StudioState) => {
                        state.activeClipIndex = activeClipIndex;
                    })
                ),
                setActiveContentIndex: (activeContentIndex : number) => set(
                    produce((state : StudioState ) => {
                        state.activeContentIndex = activeContentIndex;
                    })
                ),
                setActiveContentId: (contentId :  string ) => set(
                    produce((state: StudioState) => {
                        state.activeContentId = contentId;
                    })
                ),
                setPlayerResolution: (width: string, height: string) => set(
                    produce((state: StudioState) =>{
                        state.playerWidth = width;
                        state.playerHeight = height;
                    })
                ),
                setPlayerPlaying: (value:boolean) => set(
                    produce((state: StudioState) => {
                        state.playerPlaying = value;
                    })
                ),
                //Left bar updates
                addNewClip: (clip: TClip) => set(
                    produce((state: StudioState) => {
                        state.inputProp.clips = [...state.inputProp.clips, clip]
                    })
                ),
                reorderClips: (newOrder: TClip[]) => set(
                    produce((state : StudioState) => {
                        state.inputProp.clips = newOrder
                    })
                ),
                removeClip: (clipId: string) => set(
                    produce((state :  StudioState) => {
                        state.inputProp.clips = state.inputProp.clips.length>1 ? state.inputProp.clips.filter((item: TClip) => item.id !== clipId) : state.inputProp.clips; 
                    })
                ),
                duplicateClip: (clipId: string) => set(
                    produce((state : StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        if (clip) {
                            const duplicatedClip = { ...clip, id: uuidv4() };
                            state.inputProp.clips.push(duplicatedClip);
                        }
                    })
                ),
                addNewTextContent: (clipId: string) => set(
                    produce((state : StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        if (clip) {
                            clip.content.push({
                                id: uuidv4(),
                                type: "text",
                                data: "New Text",
                                style:{
                                    position:"absolute",
                                    top:"0px",
                                    left:"0px",
                                    fontSize:"24px",
                                    width:"100px",
                                    height:"80px",
                                }
                            })
                            //update the whole clip duration also
                            clip.duration+=1;
                        }
                    })
                ),
                updateTextContent: (clipId: string, textId: string, text: string) =>
                    set(produce((state : StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        const item = clip?.content.find((item: TClipContent) => item.id === textId);
                        if (clip && item) {
                            item.data = text;
                        }
                    })
                ),
                removeTextContent: (clipId: string, textId: string) => set(
                    produce((state : StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        const item = clip.content.find((item: TClipContent) =>
                            item.id === textId && item.type === "text");
                        if (clip && item) {
                            
                                clip.content = clip.content.length > 1 ? clip.content.filter((item: TClipContent) => item.id !== textId) : clip.content;
                        }
                    })
                ),
                updateClipDuration: (clipId: string, duration: number) => set(
                    produce((state : StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        if (clip) {
                            clip.duration = duration >= 0 ? duration : 0;
                        }
                    })
                ),
                addImageContent: (clipId: string, url: string) => set(
                    produce((state : StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        if (clip) {
                            const imageContent = {
                                id: uuidv4(),
                                type: "image",
                                data: url,
                                access: "public", // this can be changed to private if required,
                                style:{
                                    position: "absolute",
                                    top: 0,
                                    left:0,
                                    width: "60px",
                                    height: "60px",
                                }
                            }
                            clip.content.push(imageContent);
                        }
                    })
                ),
                removeAllImagesContent: (clipId: string) => set(
                    produce((state : StudioState) => {
                        
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        if(clip){

                            clip.content = clip.content.length > 1 ? clip.content.filter((item : TClipContent) => item.type !== "image"): clip.content;
                        }
                        
                    })
                ),
                addVideoContent: (clipId: string, url: string) => set(
                    produce((state : StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        if (clip) {
                            const videoContent = {
                                id: uuidv4(),
                                type: "video",
                                data: url,
                                access: "public", // this can be changed to private if required
                                style:{
                                    position: "absolute",
                                    top: 0,
                                    left:0,
                                    width: "100",
                                    height: "100",
                                }
                            }
                            clip.content.push(videoContent);
                        }
                    })
                ),
                removeAllVideosContent: (clipId: string) => set(
                    produce((state : StudioState) => {
                        
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        if(clip){

                            clip.content = clip.content.length > 1 ? clip.content.filter((item : TClipContent) => item.type !== "video") : clip.content;
                        }
                    })
                ),
                addLottieContent: (clipId: string, url: string) => set(
                    produce((state : StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        if (clip) {
                            const lottieContent = {
                                id: uuidv4(),
                                type: "lottie",
                                data: url,
                                access: "public", // this can be changed to private if required
                                style:{
                                    position: "absolute",
                                    top: 0,
                                    left:0,
                                    width: "100",
                                    height: "100",
                                }
                            }
                            clip.content.push(lottieContent);
                        }
                    })
                ),
                removeAllLottiesContent: (clipId: string) => set(
                    produce((state : StudioState) => {
                       
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        if(clip){

                            clip.content = clip.content.length > 1 ? clip.content.filter((item : TClipContent) => item.type !== "lottie") : clip.content;
                        }
                    })
                ),
                updateContentPosition: (left: string, top: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === state.activeClipId);
                        const content = clip.content.find((item : TClipContent) => item.id === state.activeContentId);
                        if(clip && content){
                            if(content?.style){
                                if(content?.style.left && content?.style?.top){
                                    content.style.left = `${left}px`;
                                    content.style.top = `${top}px`;
                                }
                                else{
                                    content.style['left'] = `${left}px`;
                                    content.style['top'] = `${top}px`;
                                }
                            }
                            else{
                                content['style'] ={
                                    left:`${left}px`,
                                    top: `${top}px`
                                }
                            }
                            
                        }
                    }) 
                ),
                updateContentSize: (width: string,height: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === state.activeClipId);
                        const content = clip.content.find((item : TClipContent) => item.id === state.activeContentId);
                        if(clip && content){
                            if(content?.style){
                                if(content?.style.height && content?.style?.width){
                                    content.style.height = `${height}px`;
                                    content.style.width = `${width}px`;
                                }
                                else{
                                    content.style['height'] = `${height}px`;
                                    content.style['width'] = `${width}px`;
                                }
                            }
                            else{
                                content['style'] ={
                                    width:`${width}px`,
                                    height: `${height}px`
                                }
                            }
                            
                        }
                    }) 
                ),
                //Text Side bar content updates
                updateFontSizeContent:(clipId: string, textId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        const content = clip.content.find((item : TClipContent) => item.id === textId);
                        if(clip && content){
                            if(content?.style['fontSize']){
                                content.style.fontSize = value + "px"
                            }
                            else{
                                content.style['fontSize'] = value + "px"
                            }
                        }
                    })
                ),
                
                updateTextDecorationContent: (clipId: string, textId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        if(clip){
                            const content = clip.content.find((item : TClipContent) => item.id === textId);
                            if(content){
                                if(content?.style['textDecoration']){
                                    let textDecorationValue = content.style.textDecoration.split(" ");
                                    if(value === "underline"){
                                        if(textDecorationValue.includes(value)){
                                            // it has underline already
                                            textDecorationValue.splice(textDecorationValue.indexOf("underline"), 1);
                                        }
                                        else{
                                            // it doesn't have underline
                                            textDecorationValue.push("underline")
                                        }
                                    }
                                    else if(value === "line-through"){
                                        if(textDecorationValue.includes(value)){
                                            // it has line through already
                                            textDecorationValue.splice(textDecorationValue.indexOf("line-through"), 1);
                                        }
                                        else{
                                            // it doesn't have line through
                                            textDecorationValue.push("line-through")
                                        }
                                    }
                                    
                                    content.style.textDecoration = textDecorationValue.join(" ");
                                }
                                else{
                                    content.style['textDecoration'] = value;
                                }
                            }
                        }
                    })
                ),
                updateFontStyleContent: (clipId: string, textId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        if(clip){
                            const content = clip.content.find((item : TClipContent) => item.id === textId);
                            if(content){
                                if(content?.style['fontStyle']){
                                    content.style.fontStyle = value;
                                }
                                else{
                                    content.style['fontStyle'] = value;
                                }
                            }
                        }
                    })
                ),
                updateFontWeightContent: (clipId: string, textId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        if(clip){
                            const content = clip.content.find((item : TClipContent) => item.id === textId);
                            if(content){
                                if(content?.style['fontWeight']){
                                    content.style.fontWeight = value;
                                }
                                else{
                                    content.style['fontWeight'] = value;
                                }
                            }
                        }
                    })
                ),
                updateFontColorContent: (clipId: string, textId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        if(clip){
                            const content = clip.content.find((item : TClipContent) => item.id === textId);
                            if(content){
                                if(content?.style['color']){
                                    content.style.color = value;
                                }
                                else{
                                    content.style['color'] = value;
                                }
                            }
                        }
                    })
                ),
                updateTextShadowContent: (clipId: string, textId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        if(clip){
                            const content = clip.content.find((item : TClipContent) => item.id === textId);
                            if(content){
                                if(content?.style['textShadow']){
                                    content.style.textShadow = value;
                                }
                                else{
                                    content.style['textShadow'] = value;
                                }
                            }
                        }
                    })
                ),
                updateFontFamilyContent: (clipId: string, textId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        if(clip){
                            const content = clip.content.find((item : TClipContent) => item.id === textId);
                            if(content){
                                if(content?.style['fontFamily']){
                                    content.style.fontFamily = value;
                                }
                                else{
                                    content.style['fontFamily'] = value;
                                }
                            }
                        }
                    })
                ),
                updateTextAlignContent: (clipId: string, textId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        if(clip){
                            const content = clip.content.find((item : TClipContent) => item.id === textId);
                            if(content){
                                if(content?.style['textAlign']){
                                    content.style.textAlign = value;
                                }
                                else{
                                    content.style['textAlign'] = value;
                                }
                            }
                        }
                    })
                ),
                updateGradientContent: (clipId: string, textId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        if(clip){
                            const content = clip.content.find((item : TClipContent) => item.id === textId);
                            if(content){
                                if(content?.style?.background){
                                    content.style.background = value;
                                    content.style['WebkitBackgroundClip'] = "text";
                                    content.style['WebkitTextFillColor'] = "transparent";
                                }
                                else{
                                    content.style['background'] = value;
                                    content.style['WebkitBackgroundClip'] = "text";
                                    content.style['WebkitTextFillColor'] = "transparent";
                                }
                            }
                        }
                    })
                ),
                updateHorizontalAlignContent: (clipId: string, contentId: string, value: any) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        const content = clip.content.find((item : TClipContent) => item.id === contentId);
                        if(clip && content){
                            
                            const calculatedLeft = parseInt(state.playerWidth)/2 - parseInt(content.style.left)  - parseInt(content?.style?.width) /2;
                                if(content?.style?.left && content?.style?.transform){
                                    content.style.left = calculatedLeft.toString() +"px";
                                    // content.style.transform 
                                    // && content.style.transform === "translateY(-50%)" 
                                    // ? content.style.transform+= value?.transform : content.style.transform = value.transform;
                                }
                                else{
                                    content.style['left'] = calculatedLeft.toString() +"px";
                                    // content.style['transform'] = value.transform;
                                }
                        }
                    })
                ),
                updateVerticalAlignContent: (clipId: string, contentId: string, value: any) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        const content = clip.content.find((item : TClipContent) => item.id === contentId);
                        if(clip && content){
                            const calculatedTop = parseInt(state.playerHeight)/2  
                            - ( parseInt(content?.style?.top) /2 + parseInt(state.playerHeight)/2);
                            
                                if(content?.style?.top && content?.style?.transform){
                                    content.style.top = calculatedTop.toString() + "px";
                                    
                                }
                                else{
                                    content.style['top'] = calculatedTop.toString() + "px";
                                }
                        }
                    })
                ),
                updateClipTransition: (clipId: string, type: TransitionType, duration: number) => set(
                    produce((state: StudioState) =>{
                        const clip = state.inputProp.clips.find((clip : TClip) => clip.id === clipId);
                        if(clip){
                            if(clip?.transition){
                                if(clip?.transition?.type && clip?.transition?.duration){
                                    clip.transition.type = type;
                                    clip.transition.duration = duration;
                                    if(clip.transition.entry && clip.transition.exit){
                                        if(clip.transition.entry.type 
                                            && clip.transition.entry.duration 
                                            && clip.transition.entry.timing){
                                            clip.transition.entry.type = type;
                                            clip.transition.entry.duration = 1;
                                            clip.transition.entry.timing="linear";

                                            clip.transition.exit.type = type;
                                            clip.transition.exit.duration = 1;
                                            clip.transition.exit.timing = "linear";
                                        }
                                        else{
                                            clip.transition.entry['type'] = type;
                                            clip.transition.entry['duration'] = 1;
                                            clip.transition.entry['timing']="linear"

                                            clip.transition.exit['type'] = type;
                                            clip.transition.exit['duration'] = 1;
                                            clip.transition.exit['timing'] = "linear";
                                        }
                                    }
                                }else{
                                    clip.transition['type'] = type;
                                    clip.transition['duration'] = duration;
                                    clip.transition['entry'] = {
                                        type: type,
                                        duration:1,
                                        timing:"linear"
                                    }
                                    clip.transition['exit'] = {
                                        type: type,
                                        duration:1,
                                        timing:"linear"
                                    };
                                }
                            }
                            else{
                                clip['transition'] = {
                                    type: type,
                                    entry:{
                                        type: type,
                                        duration: 1,
                                        timing: "linear"
                                    },
                                    exit:{
                                        type: type,
                                        duration:1,
                                        timing: "linear"
                                    },
                                    duration: duration
                                }
                            }
                            //update the whole clip duration
                            if(!clip?.transition?.type && clip?.transition?.duration){

                                clip.duration+=duration;
                            }
                        }
                    })
                ),
                updateClipBackground:(clipId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((clip: TClip) => clip.id === clipId);
                        if (clip) {
                            if (clip?.background) {
                                if (clip?.background?.type && clip?.background?.value) {
                                    clip.background.type = "color";
                                    clip.background.value = value;
                                }
                                else {
                                    clip.background['type'] = "color";
                                    clip.background['value'] = value;
                                }
                            }
                            else {
                                clip['background'] = {
                                    type: "color",
                                    value: value,
                                }
                            }

                        }
                    })
                ),
                updateClipBackgroundVideo: (clipId: string, value: string) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((item : TClip) => item.id === clipId);
                        if(clip){
                            if (clip?.background) {
                                if (clip?.background?.type && clip?.background?.value) {
                                    clip.background.type = "video";
                                    clip.background.value = value;
                                }
                                else {
                                    clip.background['type'] = "video";
                                    clip.background['value'] = value;
                                }
                            }
                            else {
                                clip['background'] = {
                                    type: "video",
                                    value: value
                                }
                            }
                        }
                    })
                ),
                updateClipAudioSource: (clipId: string, value: string, volume?: number, loop?: boolean) => set(
                    produce((state: StudioState) => {
                        const clip = state.inputProp.clips.find((item: TClip) => item.id === clipId);
                        if(clip){
                            if(clip?.audio){
                                if(clip?.audio?.source || clip?.audio.volume || clip?.audio?.loop){
                                    clip.audio.source = value;
                                    clip.audio.volume = volume ? volume : null;
                                    clip.audio.loop = loop ? loop : null;
                                }
                                else{
                                    clip.audio['source'] = value;
                                    clip.audio['volume'] = volume ? volume : null;
                                    clip.audio['loop'] = loop ? loop : null;
                                }
                            }
                            else{
                                clip['audio'] ={
                                    source: value,
                                    volume: volume ? volume : null,
                                    loop: loop ? loop : null,
                                }
                            }
                        }
                    })
                )
            }),
            
            {
                name: 'studio' // name of the key on localstorage
            }
        ), {
        enabled: true, // this should be set to false at production to disable devtool
        name: 'studio' // name of the store at devtool
    }),

);


export default useStudioStore;