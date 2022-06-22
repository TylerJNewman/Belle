import {
  Box,
  Center,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import {MdMenu, MdSearch} from 'react-icons/md'
import {items} from './NavItemIcons'
import {NavAction} from './NavAction'
import Image from 'next/image'
import {NextLink} from './NextLink'

const DesktopNavHeader = () => (
  <Box
    py="6"
    px="10"
    bg={mode('white', 'gray.800')}
    display={{base: 'none', lg: 'block'}}
    borderBottom="1px"
    borderColor="gray.200"
    as="header"
    position="fixed"
    top={0}
    zIndex={200}
    width="100%"
  >
    <Flex align="center" maxWidth="8xl" mx="auto">
      <HStack
        role="navigation"
        aria-label="Main navigation"
        spacing="10"
        // fontWeight="semibold"
        fontSize="md"
        style={{flex: '1 1 0'}}
      >
        <NextLink href="#">Collection</NextLink>
        <NextLink href="#" color={mode('blue.500', 'blue.200')}>
          Accessories
        </NextLink>
        <NextLink href="/about">About us</NextLink>
      </HStack>
      <a href="#" rel="home" aria-label="Go to Store Homepage">
        {/* <Logo h="4" /> */}
        <Image src="/logo.webp" alt="me" width="205" height="59" />
      </a>
      <HStack spacing="4" style={{flex: '1 1 0', justifyContent: 'flex-end'}}>
        <HStack spacing="4">
          <NavAction.Desktop {...items.search} />
          <NavAction.Desktop {...items.user} />
          <NavAction.Desktop {...items.cart} />
        </HStack>
      </HStack>
    </Flex>
  </Box>
)

const MobileNavHeader = (props: {
  onClickMenu?: VoidFunction
  onClickSearch?: VoidFunction
}) => {
  const {onClickMenu, onClickSearch} = props
  return (
    <Flex
      px="4"
      py="4"
      align="center"
      justify="space-between"
      bg={mode('white', 'gray.800')}
      display={{base: 'flex', lg: 'none'}}
      borderBottom="1px"
      borderColor="gray.200"
      as="header"
      position="fixed"
      top={0}
      zIndex={200}
      width="100%"
    >
      <HStack spacing="3">
        <Center w="8" h="8" as="button" type="button" onClick={onClickMenu}>
          <VisuallyHidden>Toggle Menu</VisuallyHidden>
          <Box as={MdMenu} fontSize="3xl" />
        </Center>
        {/* <Logo h="4" /> */}
      </HStack>
      <Image src="/logo.webp" alt="me" width="205" height="59" layout="fixed" />
      <HStack>
        {/* <CurrencySelect /> */}
        <Center
          w="8"
          h="8"
          flexShrink={0}
          as="button"
          type="button"
          onClick={onClickSearch}
        >
          <VisuallyHidden>Search Store</VisuallyHidden>
          <Box as={MdSearch} fontSize="2xl" />
        </Center>
      </HStack>
    </Flex>
  )
}

export const NavHeader = {
  Desktop: DesktopNavHeader,
  Mobile: MobileNavHeader,
}
