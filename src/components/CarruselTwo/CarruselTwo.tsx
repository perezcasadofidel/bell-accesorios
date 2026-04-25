import { useCallback, useEffect, useState } from 'react'
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CarruselTwoArrowButtons'

interface Example {
  id:string,
  img:string,
  name:string,
  precio:number,
  texto1:string,
  texto2:string
}
type PropType = {
  slides: Example[]
  options?: EmblaOptionsType
}

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [scrollProgress, setScrollProgress] = useState(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    const handleScroll = () => {
      onScroll(emblaApi);      // this may call setState
    };

    const id = window.setTimeout(handleScroll, 0); 

    emblaApi
      .on('reInit', handleScroll)
      .on('scroll', handleScroll)
      .on('slideFocus', handleScroll)

    return () => {
      emblaApi.off('reInit', handleScroll).off('scroll', handleScroll).off('slideFocus',handleScroll);
      clearTimeout(id);
    };
    
  }, [emblaApi, onScroll])

  return (
    <div className="embla2">
      <div className='shadowPrev absolute bg-linear-to-l from-transparent to-amber-100 top-0 left-0 w-[5%] h-[65%] z-100'></div>
      <div className='shadowNext absolute bg-linear-to-r from-transparent to-amber-100 top-0 right-0 w-[5%] h-[65%] z-100'></div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      <div className="embla__viewport2" ref={emblaRef}>
        <div className="embla__container2">
          
          {slides.map((index) => (
            <div className="embla__slide2" key={index.id}>
              <div className="embla__slide__number2">
                <img src={index.img} alt="" />
                <p className='mt-1 font-bold'>{index.name}</p>
                <p>{index.precio} CUP</p>
                <p>{index.texto1}</p>
                <p className='font-bold'>{index.texto2}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      <div className="embla__controls2">
        <div className="embla__progress2">
          <div
            className="embla__progress__bar2"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
