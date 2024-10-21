import React from 'react';
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import useStudioStore, { StudioState } from '@/stores/studio';

export type DropdownList = {
    label: string,
    value: string
  }
type Props = {
    lists: DropdownList[],
    identifier: string,
}

export const SelectorIcon = (props: Props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M8 9l4 -4l4 4" />
            <path d="M16 15l-4 4l-4 -4" />
        </svg>
    )
}


const SelectDropdown = (props: Props) => {

    const activeClipId = useStudioStore((state: StudioState) => state.activeClipId);
    const activeContentId = useStudioStore((state: StudioState) => state.activeContentId);
    const updateFontFamilyContent = useStudioStore((state: StudioState) => state.updateFontFamilyContent);
    function handleUpdateFontContent(value: string){
        console.log("value - ", value);
        const index = parseInt(value);
        const selectedItem = props.lists.find((item) => item.value === props.lists[index].value);
        console.log("selected - ", selectedItem);
        if(selectedItem){

            updateFontFamilyContent(activeClipId, activeContentId, selectedItem.value);
        }

    }

    // function handleOnChangeItems(identifier:string){
    //     switch(identifier){
    //         case "font-families":
    //             handleUpdateFontContent(value);
    //     }
    // }
    return (
        <>
            <Select
                placeholder="None"
                labelPlacement="outside"
                className="max-w-xs "
                disableSelectorIconRotation
                selectorIcon={<SelectorIcon {...props}/>}
                variant="bordered"
                popoverProps={{
                    classNames: {
                        content: "bg-avid-main-400"
                    },
                }}
                listboxProps={{
                    itemClasses:{
                        base:[
                            "data-[hover=true]:bg-blue-600",
                            "data-[selectable=true]:focus:bg-blue-600",
                            "data-[pressed=true]:bg-blue-600",
                            "data-[focus-visible=true]:bg-blue-600",
                        ]
                    }
                }}
                onChange={ (e) => props.identifier ==="font-families" &&  handleUpdateFontContent(e.target.value)}
            >
                {props.lists.map((item, index) => (
                    <SelectItem key={index} value={item.value}
                        
                    >
                        {item.label}
                    </SelectItem>
                ))}
            </Select>
        </>
    )
}

export default SelectDropdown