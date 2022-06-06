import {Box, BoxProps} from '@chakra-ui/react'
import React from 'react'

export const TopBanner = (props: BoxProps) => {
  return (
    <Box
      bg="rgb(255, 236, 222)"
      textAlign="center"
      py="4"
      fontSize="xs"
      fontWeight="medium"
      {...props}
    >
      Free shipping on all orders before 24th December 2021
    </Box>
  )
}
