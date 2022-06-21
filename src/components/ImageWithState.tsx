import React from 'react'
import NextImage, {ImageProps} from 'next/image'
import {
  chakra,
  Skeleton,
  SkeletonProps,
  ImageProps as IP,
} from '@chakra-ui/react'

const Image = chakra(NextImage, {
  // baseStyle: {maxH: 120, maxW: 120},
  shouldForwardProp: prop =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader ',
      'onLoadingComplete',
      'onError',
      'layout',
      'priority',
      'objectFit',
    ].includes(prop),
})

type ImageWithStateProps = ImageProps &
  IP & {
    skeletonProps?: SkeletonProps
    fallbackSrc: string
    debug?: string
  }

function ImageWithState({
  src,
  skeletonProps,
  ...props
}: ImageWithStateProps): JSX.Element {
  const [loading, setLoading] = React.useState(true)
  const [onErrorSrc, setOnErrorSrc] = React.useState<string | undefined>(
    undefined,
  )

  function handleOnError(
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ): void {
    console.log('handle on error')
    if (e?.currentTarget?.src !== props.fallbackSrc) {
      setOnErrorSrc(props.fallbackSrc)
    }
  }

  return (
    <>
      {loading === true && (
        <Skeleton
          style={{
            position: 'absolute',
            zIndex: props.debug === 'true' ? 99 : 'auto',
            top: '-2px',
          }}
          height={props.height}
          width={props.width}
          {...skeletonProps}
        />
      )}
      <Image
        {...props}
        height={props.height ?? '100%'}
        width={props.width ?? '100%'}
        src={onErrorSrc ?? src}
        onLoadingComplete={() => !props.debug && setLoading(false)}
        onError={e => handleOnError(e)}
      />
    </>
  )
}

export {ImageWithState}
