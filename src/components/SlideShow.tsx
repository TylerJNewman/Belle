import {Flex, FlexProps} from '@chakra-ui/react'
import React from 'react'
import {useEffect} from 'react'
import {useTransitionCarousel} from 'react-spring-carousel'

export const CarouselItem = React.forwardRef<HTMLDivElement, FlexProps>(
  function Carousel(props, ref) {
    return (
      <Flex
        ref={ref}
        className="chakra-carousel"
        overflow="hidden"
        position="relative"
        userSelect="none"
        {...props}
      />
    )
  },
)

export function Component() {
  const {carouselFragment, slideToPrevItem, slideToNextItem} =
    useTransitionCarousel({
      items: [],
    })

  useEffect(() => {
    const timer = setInterval(() => {
      slideToNextItem()
    }, 1500)
    return () => {
      window.clearInterval(timer)
    }
    // You MUST add the slide methods to the dependency list useEffect!
  }, [slideToNextItem])

  return (
    <div>
      <button onClick={slideToPrevItem}>Prev item</button>
      {carouselFragment}
      <button onClick={slideToNextItem}>Next item</button>
    </div>
  )
}
