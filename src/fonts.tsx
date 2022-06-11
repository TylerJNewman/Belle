import {Global} from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'AvenirNextLTPro-Regular';
        src: url('http://anthillrealtors.co.id/wp-content/themes/x-child/fonts/AvenirNextLTPro-Regular.eot');
        src: url('http://anthillrealtors.co.id/wp-content/themes/x-child/fonts/AvenirNextLTPro-Regular.eot?#iefix') format('embedded-opentype'),
        url('http://anthillrealtors.co.id/wp-content/themes/x-child/fonts/AvenirNextLTPro-Regular.woff') format('woff'),
        url('http://anthillrealtors.co.id/wp-content/themes/x-child/fonts/AvenirNextLTPro-Regular.ttf') format('truetype'),
        url('http://anthillrealtors.co.id/wp-content/themes/x-child/fonts/AvenirNextLTPro-Regular.svg#AvenirNextLTPro-Regular') format('svg');
      }
      `}
  />
)
