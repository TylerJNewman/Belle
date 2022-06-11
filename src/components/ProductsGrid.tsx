import {
  AspectRatio,
  Box,
  HStack,
  Icon,
  IconButton,
  IconButtonProps,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  StackProps,
  Text,
  TextProps,
  useColorModeValue as mode,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {FaStar} from 'react-icons/fa'
import {FiEye, FiHeart} from 'react-icons/fi'

interface Props {
  defaultValue?: number
  max?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  rootProps?: StackProps
}

export const Rating = (props: any) => {
  const {defaultValue = 0, max = 5, size = 'md', rootProps} = props
  const color = useColorModeValue('gray.300', 'gray.600')
  const activeColor = useColorModeValue('blue.500', 'blue.200')
  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({length: max})
        .map((_, index) => index + 1)
        .map(index => (
          <Icon
            key={index}
            as={FaStar}
            fontSize={size}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  )
}

interface Props {
  product: Product
}

export const ProductCard = (props: Props) => {
  const {product} = props
  return (
    <Stack spacing="4">
      <Box position="relative" className="group">
        <AspectRatio ratio={3 / 4}>
          <Image
            src={product.image.url}
            alt={product.name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius="md"
          />
        </AspectRatio>
      </Box>
      <Stack spacing="1">
        <HStack justifyContent="space-between">
          <Text
            color={useColorModeValue('black', 'white')}
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="wider"
            // textTransform="uppercase"
          >
            {product.name}
          </Text>
          <PriceTag
            // currency={product.currency}
            currency="usd"
            price={product.price}
            priceProps={{
              fontSize: 'sm',
              fontWeight: 'semibold',
              color: useColorModeValue('black', 'white'),
            }}
          />
        </HStack>
        {/* <HStack>
          <Rating defaultValue={product.rating} size="sm" />
          <Text
            fontWeight="medium"
            fontSize="sm"
            color={useColorModeValue('gray.500', 'gray.200')}
          >
            ({product.ratingCount})
          </Text>
        </HStack> */}
      </Stack>
    </Stack>
  )
}

export const ProductCardButton = (props: IconButtonProps) => (
  <IconButton
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow="base"
    variant="ghost"
    colorScheme="blue"
    size="lg"
    sx={{
      ':not(:hover)': {color: useColorModeValue('gray.600', 'gray.400')},
    }}
    _focus={{boxShadow: 'none'}}
    _focusVisible={{boxShadow: 'outline'}}
    {...props}
  />
)

interface PriceTagProps {
  currency: string
  price: number
  salePrice?: number
  rootProps?: StackProps
  priceProps?: TextProps
  salePriceProps?: TextProps
}

export type FormatPriceOptions = {locale?: string; currency?: string}

export function formatPrice(
  value: number,
  opts: {locale?: string; currency?: string} = {},
) {
  const {locale = 'en-US', currency = 'USD'} = opts
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
}

export const PriceTag = (props: PriceTagProps) => {
  const {price, currency, salePrice, rootProps, priceProps, salePriceProps} =
    props
  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!salePrice} textProps={priceProps}>
        {formatPrice(price, {currency})}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>
          {formatPrice(salePrice, {currency})}
        </SalePrice>
      )}
    </HStack>
  )
}

interface PriceProps {
  children?: React.ReactNode
  isOnSale?: boolean
  textProps?: TextProps
}

const Price = (props: PriceProps) => {
  const {isOnSale, children, textProps} = props
  const defaultColor = mode('gray.700', 'gray.400')
  const onSaleColor = mode('gray.400', 'gray.700')
  const color = isOnSale ? onSaleColor : defaultColor
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      textDecoration={isOnSale ? 'line-through' : 'none'}
      {...textProps}
    >
      {children}
    </Text>
  )
}

const SalePrice = (props: TextProps) => (
  <Text
    as="span"
    fontWeight="semibold"
    color={mode('gray.800', 'gray.100')}
    {...props}
  />
)
export const products = [
  {
    id: '1',
    name: 'Pattern Mini-dress',
    price: 48.99,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80',
    rating: 4,
    ratingCount: 20,
  },
  {
    id: '2',
    name: 'Midi Skater Dress',
    price: 199.99,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80',
    rating: 4,
    ratingCount: 15,
  },
  {
    id: '3',
    name: 'Off-shoulder top',
    price: 49.99,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80',
    rating: 4,
    ratingCount: 9,
  },
]

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never

// export type Product = ElementType<typeof products>

export interface Image {
  url: string
  fileName: string
}
export interface Product {
  id: string
  name: string
  price: number
  image: Image
}

export const ProductsGrid = ({products}) => (
  <Box
    // maxW="5xl"
    mx="auto"
    px={{base: '4', md: '8', lg: '12'}}
    py={{base: '6', md: '8', lg: '12'}}
  >
    <SimpleGrid columns={{base: 1, sm: 2, lg: 3}} gap={{base: '8', lg: '12'}}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  </Box>
)
