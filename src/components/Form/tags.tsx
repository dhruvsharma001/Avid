import React from "react";
import { Chip } from "@nextui-org/react";

type TProps = {
  tags: string[];
  onRemove: (tag: string) => void;
};

export default function Tags(props: TProps) {
  const [tags, setTags] = React.useState(props.tags);

  const handleClose = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
    props.onRemove(tagToRemove);
  };

  return (
    <div className="flex gap-2">
      {props.tags.map((tag, index) => (
        <Chip key={index} onClose={() => handleClose(tag)} variant="flat">
          {tag}
        </Chip>
      ))}
    </div>
  );
}
