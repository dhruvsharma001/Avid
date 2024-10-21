import { Code } from "@nextui-org/react";

type TProps = {
  text: string;
};
export default function Info({ text }: TProps) {
  return (
    <div className="w-full flex justify-center">
      <Code color="default">{text}</Code>
    </div>
  );
}
