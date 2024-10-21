import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../ui/EmblaCarousel";

const OPTIONS: EmblaOptionsType = { align: "center", loop: true };

type TProps = {
  images: { id: number; image: string }[];
};
export default function ImageCarousel({ images }: TProps) {
  return <EmblaCarousel slides={images} options={OPTIONS} />;
}
