import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

type PropType = {
  slides: { id: number; image: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="w-full flex items-center">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((image) => (
              <div className="embla__slide" key={image.id}>
                <div className="embla__slide__number">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      className="w-full h-auto object-contain"
                      src={image.image}
                      fill
                      alt={image.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="embla__progress">
        <div
          className="embla__progress__bar"
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
