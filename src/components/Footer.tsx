import React from 'react'

import {
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {NextLink} from './NextLink'

export const Footer = () => (
  <>
    <Stack
      spacing="8"
      direction={{base: 'column', md: 'row'}}
      justify="space-between"
      py={{base: '12', md: '16'}}
      // px={{base: '5px', sm: '64px'}}
      px="10"
      bg={'rgb( 245, 241, 236)'}
    >
      <Stack spacing={{base: '6', md: '8'}} align="start">
        <Text fontSize="sm" fontWeight="semibold" color="subtle">
          ABOUT GAÂLA
        </Text>
        <Text color="muted" maxWidth={300}>
          For the modern woman with a vintage heart, Gaâla is a slow-fashion
          brand bringing you timeless apparel crafted by skilled European
          artisans using luxurious upcycled fabrics..
        </Text>
      </Stack>
      <Stack
        direction={{base: 'column-reverse', md: 'column', lg: 'row'}}
        spacing={{base: '12', md: '8'}}
      >
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW={{base: '30', sm: '36'}} flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Product
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <NextLink href="#">Collection</NextLink>
              <NextLink href="#">Contact</NextLink>
              <NextLink href="#">FAQ</NextLink>
            </Stack>
          </Stack>
          <Stack spacing="4" minW={{base: '30', sm: '36'}} flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <NextLink href="#">Privacy</NextLink>
              <NextLink href="#">Terms</NextLink>
              <NextLink href="#">License</NextLink>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            Stay up to date
          </Text>
          <Stack
            spacing="4"
            direction={{base: 'column', sm: 'row'}}
            maxW={{lg: '360px'}}
          >
            <Input placeholder="Enter your email" type="email" required />
            <Button variant="primary" type="submit" flexShrink={0}>
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{base: 'column-reverse', md: 'row'}}
      align="center"
      // px="64px"
      px="10"
      bg={'rgb( 245, 241, 236)'}
    >
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Gaala, Inc. All rights reserved.
      </Text>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          //   href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          //   href="#"
          aria-label="GitHub"
          icon={<FaGithub fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          //   href="#"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="1.25rem" />}
        />
      </ButtonGroup>
    </Stack>
  </>
)
