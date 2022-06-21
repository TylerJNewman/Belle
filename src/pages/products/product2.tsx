import React from 'react'

import {MobileBottomNav} from 'components/MobileBottomNav'
import {NavMenu} from 'components/NavMenu'
import {Gallery} from 'components/Gallery'
import {images} from 'components/_carousel_data'
import {
  Box,
  Stack,
  HStack,
  useColorModeValue,
  Heading,
  Icon,
  Button,
  Text,
  Link,
  AspectRatio,
  Skeleton,
  Image,
  GridItem,
} from '@chakra-ui/react'
import {FiClock, FiHeart} from 'react-icons/fi'
import {RiRulerLine} from 'react-icons/ri'
import {Rating} from 'components/Rating'
import {PriceTag} from 'components/PriceTag'
import {ColorPicker} from 'components/ColorPicker'
import {SizePicker} from 'components/SizePicker'
import {QuantityPicker} from 'components/QuantityPicker'

const ProductWithCarousel = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{base: '4', md: '8', lg: '12'}}
      py={{base: '6', md: '8', lg: '12'}}
    >
      <Stack
        direction={{base: 'column-reverse', lg: 'row'}}
        spacing={{base: '6', lg: '12', xl: '16'}}
        display="flex"
        justifyContent="space-around"
      >
        <Stack
          spacing={{base: '6', lg: '8'}}
          maxW={{lg: 'sm'}}
          justify="center"
        >
          <Stack spacing={{base: '3', md: '4'}}>
            <Stack spacing="3">
              {/* <HStack alignSelf="baseline">
                <Rating defaultValue={4} size="sm" />
                <Link
                  href="#"
                  fontSize="sm"
                  fontWeight="medium"
                  color={useColorModeValue('gray.600', 'gray.400')}
                >
                  12 Reviews
                </Link>
              </HStack> */}
              <Heading size="lg" fontWeight="medium">
                Classic Black
              </Heading>
            </Stack>
            <PriceTag price={229} currency="GBP" rootProps={{fontSize: 'xl'}} />
            {/* <Text color={useColorModeValue('gray.600', 'gray.400')}>
              With a sleek design and a captivating essence, this is a modern
              Classic made for every occasion.
            </Text> */}
          </Stack>
          <Stack
            direction={{base: 'column', md: 'row'}}
            spacing={{base: '6', md: '8'}}
          >
            {/* <Stack flex="1">
              <ColorPicker
                defaultValue="Black"
                options={[
                  {label: 'Black', value: '#000'},
                  {label: 'Dark Gray', value: '#666'},
                  {label: 'Light Gray', value: '#BBB'},
                ]}
              />
              <HStack
                spacing="1"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                <Icon as={FiClock} />
                <Text fontSize="xs" fontWeight="medium">
                  Low stock
                </Text>
              </HStack>
            </Stack> */}
            <Stack flex="1">
              <SizePicker
                defaultValue="S"
                options={[
                  {label: 'S', value: 'S'},
                  {label: 'M', value: 'M'},
                  {label: 'L', value: 'L'},
                ]}
              />
              {/* <HStack
                spacing="1"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                <Icon as={RiRulerLine} />
                <Link
                  href="#"
                  fontSize="xs"
                  fontWeight="medium"
                  textDecoration="underline"
                >
                  View our sizing guide
                </Link>
              </HStack> */}
            </Stack>
          </Stack>
          <HStack
            spacing={{base: '4', md: '8'}}
            align="flex-end"
            // justify="space-evenly"
          >
            <Box flex="1" maxWidth={'9em'}>
              <QuantityPicker defaultValue={1} max={3} />
            </Box>
            {/* <Box flex="1">
              <Button
                variant="outline"
                size="lg"
                fontSize="md"
                isFullWidth
                leftIcon={<Icon as={FiHeart} boxSize="4" />}
              >
                Favorite
              </Button>
            </Box> */}
          </HStack>
          <Button colorScheme="blue" size="lg">
            Add to cart
          </Button>
        </Stack>
        <AspectRatio ratio={3 / 4} height={'844px'} width={'562px'}>
          <Image
            src={'https://placekitten.com/200/287'}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius="md"
          />
        </AspectRatio>
      </Stack>
    </Box>
  )
}

export default ProductWithCarousel
