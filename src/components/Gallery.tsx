import * as React from 'react'

import NextImage from 'next/image'

import {
  AspectRatio,
  Box,
  chakra,
  Circle,
  HStack,
  IconButton,
  IconButtonProps,
  Image,
  Skeleton,
  Stack,
  StackProps,
  useColorModeValue,
} from '@chakra-ui/react'
// import {IoChevronBackOutline, IoChevronForwardOutline} from 'react-icons/io5'
import {animated, config, useTransition} from 'react-spring'
import {useState} from 'react'
import {ImageWithState} from './ImageWithState'

interface ProductImage {
  url: string
  fileName: string
}
interface GalleryProps {
  images: ProductImage[]
  aspectRatio?: number
  rootProps?: StackProps
}

export const Gallery = (props: GalleryProps) => {
  const {images, aspectRatio = 4 / 3, rootProps} = props
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [toggle, set] = useState(true)

  const transitions = useTransition(toggle, {
    from: {position: 'absolute', opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    reverse: toggle,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!toggle),
  })

  return (
    <Stack spacing="4" {...rootProps}>
      <Box
        sx={{
          position: 'relative',
          height: 760,
        }}
      >
        {transitions(({opacity}, item) =>
          item ? (
            <animated.div
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                opacity: opacity.to({range: [0.0, 1.0], output: [0, 1]}),
              }}
            >
              <AspectRatio ratio={aspectRatio} maxW="100%">
                <ImageWithState
                  src={images[0].url}
                  alt={images[0].fileName}
                  fallbackSrc="/image.webp"
                  skeletonProps={{
                    startColor: 'rgb(255, 236, 222)',
                    endColor: 'rgb(244, 205, 174)',
                  }}
                  priority
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/image.webp"
                />
                {/* <NextImage
                  src={images[0].url}
                  objectFit="cover"
                  alt={images[0].fileName}
                  // fallback={
                  //   <Skeleton
                  //     startColor="rgb(255, 236, 222)"
                  //     endColor="rgb(244, 205, 174)"
                  //   />
                  // }
                  layout="fill"
                  priority
                /> */}
              </AspectRatio>
            </animated.div>
          ) : (
            <animated.div
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                opacity: opacity.to({range: [1.0, 0.0], output: [1, 0]}),
              }}
            >
              <AspectRatio ratio={aspectRatio} maxW="100%">
                {/* <NextImage
                  src={images[0].url}
                  objectFit="cover"
                  alt={images[0].fileName}
                  layout="fill"
                  // fallback={
                  //   <Skeleton
                  //     startColor="rgb(255, 236, 222)"
                  //     endColor="rgb(244, 205, 174)"
                  //   />
                  // }
                /> */}
                <ImageWithState
                  src={images[1].url}
                  alt={images[1].fileName}
                  fallbackSrc="/image.webp"
                  skeletonProps={{
                    startColor: 'rgb(255, 236, 222)',
                    endColor: 'rgb(244, 205, 174)',
                  }}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/image.webp"
                />
              </AspectRatio>
            </animated.div>
          ),
        )}
        {/* <CarouselIconButton
          pos="absolute"
          left="3"
          top="50%"
          transform="translateY(-50%)"
          // onClick={() => slider.current?.prev()}
          onClick={slideToPrevItem}
          icon={<IoChevronBackOutline />}
          aria-label="Previous Slide"
        />

        <CarouselIconButton
          pos="absolute"
          right="3"
          top="50%"
          transform="translateY(-50%)"
          // onClick={() => slider.current?.next()}
          onClick={slideToNextItem}
          icon={<IoChevronForwardOutline />}
          aria-label="Next Slide"
        /> */}
        <HStack
          position="absolute"
          width="full"
          justify="center"
          bottom="0"
          py="4"
        >
          {images.map((_, index) => (
            <Circle
              key={index}
              size="2"
              bg={currentSlide === index ? 'white' : 'whiteAlpha.400'}
            />
          ))}
        </HStack>
      </Box>
    </Stack>
  )
}

const CarouselIconButton = (props: IconButtonProps) => (
  <IconButton
    display="none"
    fontSize="lg"
    isRound
    boxShadow="base"
    bg={useColorModeValue('white', 'gray.800')}
    _hover={{
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
    _active={{
      bg: useColorModeValue('gray.200', 'gray.600'),
    }}
    _focus={{boxShadow: 'inerhit'}}
    _focusVisible={{boxShadow: 'outline'}}
    {...props}
  />
)
