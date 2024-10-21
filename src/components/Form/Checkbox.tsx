import React, { useEffect } from "react";
import { Checkbox } from "@nextui-org/react";

type TProps = {
  items: {
    id: string;
    label: string;
    value: string;
  }[];
  onChange: (val: any) => void;
};
export default function Checkboxes(props: TProps) {
  const { onChange: onChangeProps } = props;
  const [selected, setSelected] = React.useState<string[]>([]);
  const onChange = (val: string) => {
    if (selected.includes(val)) {
      setSelected(selected.filter((item) => item !== val));
    } else {
      setSelected([...selected, val]);
    }
  };
  useEffect(() => {
    onChangeProps(selected);
  }, [selected]);
  return (
    <div className="flex flex-col gap-2">
      {props.items.map((item) => {
        return (
          <Checkbox
            key={item.id}
            isSelected={selected.includes(item.id)}
            onValueChange={(e) => {
              onChange(item.id);
            }}
          >
            {item.label}
          </Checkbox>
        );
      })}
    </div>
  );
}
