import { cn } from "@/lib/utils";

type TProps = {
  className?: string;
  step: string;
};
export default function Step(props: TProps) {
  return (
    <span
      className={cn(
        "text-avid-gray-300 border border-avid-gray-300 rounded-full w-10 h-10 md:w-12 md:h-12 grid place-items-center",
        props.className
      )}
    >
      {props.step}
    </span>
  );
}
