import {
  type ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import { type EmblaCarouselType } from 'embla-carousel'

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return;

    const handleInit  = () => onInit(emblaApi);
    const handleSelect = () => onSelect(emblaApi);

    // initial sync – run after the current rendering phase
    const id = window.setTimeout(() => {
      handleInit();
      handleSelect();
    }, 0);
    // or: requestAnimationFrame(handleInit); requestAnimationFrame(handleSelect);

    emblaApi
      .on('reInit', handleInit)    // note the capital “I” – EmblaEventType
      .on('reInit', handleSelect)
      .on('select', handleSelect);

    return () => {
      emblaApi
        .off('reInit', handleInit)
        .off('reInit', handleSelect)
        .off('select', handleSelect);

      clearTimeout(id);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const DotButton = (props: PropType) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}
