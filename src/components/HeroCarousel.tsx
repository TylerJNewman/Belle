import {Box} from '@chakra-ui/react'
import React from 'react'
import {Gallery} from './Gallery'
import {images} from './_carousel_data'

const HeroCarousel = () => {
  return (
    <Gallery
      rootProps={{overflow: 'hidden', flex: '1', height: 760}}
      images={images.slice(0, 5)}
    />
  )
}

export default HeroCarousel
