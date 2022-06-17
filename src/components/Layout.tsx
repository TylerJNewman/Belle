import React from 'react'

import {NavHeader} from 'components/NavHeader'
import {TopBanner} from 'components/TopBanner'
import {Footer} from 'components/Footer'
import {Box} from '@chakra-ui/react'

export const Layout = ({children}: {children: React.ReactElement}) => {
  return (
    <>
      {/* <TopBanner /> */}
      <NavHeader.Desktop />

      {/* <NavMenu.Desktop /> */}
      <NavHeader.Mobile />
      <Box mt={{base: 92, lg: 115}}>{children}</Box>

      <Footer />
    </>
  )
}
