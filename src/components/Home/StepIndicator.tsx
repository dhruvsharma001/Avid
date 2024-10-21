import Step from "./Step";

type TProps = {
  step: string;
};
export default function StepIndicator(props: TProps) {
  return (
    <div className="absolute left-10 top-30 h-full hidden md:flex flex-col items-center">
      <Step step={props.step} />
      <div className="w-[1px] h-full bg-avid-gray-300" />
    </div>
  );
}
