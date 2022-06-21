import {Link} from '@chakra-ui/react'
import _NextLink from 'next/link'
import React from 'react'

interface Props {
  href: string
  children: React.ReactNode
  color?: string
}

export const NextLink = ({href, children, color}: Props) => {
  return (
    <_NextLink href={href} passHref>
      <Link color={color}>{children}</Link>
    </_NextLink>
  )
}
