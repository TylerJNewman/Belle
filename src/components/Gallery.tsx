import * as React from 'react'
import {
  AspectRatio,
  Box,
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
import useInterval from 'hooks/useInterval'
import {IoChevronBackOutline, IoChevronForwardOutline} from 'react-icons/io5'
import {config} from 'react-spring'
import {useTransitionCarousel} from 'react-spring-carousel'
import {ProductImage} from './_carousel_data'

interface GalleryProps {
  images: ProductImage[]
  aspectRatio?: number
  rootProps?: StackProps
}

export const Gallery = (props: GalleryProps) => {
  const {images, aspectRatio = 4 / 3, rootProps} = props
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const {carouselFragment, slideToPrevItem, slideToNextItem} =
    useTransitionCarousel({
      springConfig: config.molasses,
      withLoop: true,
      // @ts-ignore
      items: images.map((image, i) => ({
        id: i,
        renderItem: (
          <AspectRatio ratio={aspectRatio}>
            <Image
              src={image.src}
              objectFit="cover"
              alt={image.alt}
              fallback={<Skeleton />}
            />
          </AspectRatio>
        ) as React.ReactNode,
      })),
    })

  useInterval(slideToNextItem, 3000)

  return (
    <Stack spacing="4" {...rootProps}>
      <Box
        sx={{
          position: 'relative',
          height: 760,
        }}
      >
        {carouselFragment}
        <CarouselIconButton
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
        />
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
