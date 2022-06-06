import * as React from 'react'
import {MobileBottomNav} from 'components/MobileBottomNav'
import {NavHeader} from 'components/NavHeader'
import {NavMenu} from 'components/NavMenu'
import {TopBanner} from 'components/TopBanner'

const Index = () => (
  <>
    <TopBanner />
    <NavHeader.Desktop />
    {/* <NavMenu.Desktop /> */}
    <NavHeader.Mobile />
    {/* <NavMenu.Mobile /> */}
  </>
)

export default Index
