import React from 'react'
import {Gallery} from './Gallery'

export const HeroCarousel = ({items}) => {
  return (
    <Gallery
      rootProps={{overflow: 'hidden', flex: '1', height: 760}}
      images={items}
    />
  )
}
