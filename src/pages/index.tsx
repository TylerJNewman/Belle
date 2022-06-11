import * as React from 'react'
import {NavHeader} from 'components/NavHeader'
import {TopBanner} from 'components/TopBanner'
import HeroCarousel from 'components/HeroCarousel'
import Footer from 'components/Footer'

const Index = () => (
  <>
    <TopBanner />
    <NavHeader.Desktop />

    {/* <NavMenu.Desktop /> */}
    <NavHeader.Mobile />
    <HeroCarousel />
    {/* <NavMenu.Mobile /> */}
    <Footer />
  </>
)

export default Index
