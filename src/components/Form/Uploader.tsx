import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];
type TProps = {
  name: string;
  multiple?: boolean;
  label: string;
  hoverTitle?: string;
  classes?: string;
  maxSize?: number;
  minSize?: number;
  onSizeError?: (file: any) => void;
  onDrop?: (file: any) => void;
  handleFileChange?: (file: any) => void;
  fileTypes?: string[];
};
function Uploader(props: TProps) {
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
    if (props.handleFileChange) props.handleFileChange(file);
  };
  return (
    <div className="">
      <FileUploader
        {...props}
        handleChange={handleChange}
        types={props.fileTypes || fileTypes}
      />
    </div>
  );
}

export default Uploader;
