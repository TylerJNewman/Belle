import React from 'react'
import Image, {ImageProps} from 'next/image'
import {Skeleton, SkeletonProps} from '@chakra-ui/react'

type ImageWithStateProps = ImageProps & {
  skeletonProps?: SkeletonProps
  fallback: string
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
    if (e?.currentTarget?.src !== props.fallback) {
      setOnErrorSrc(props.fallback)
    }
  }

  return (
    <>
      {/* {loading === true && (
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
      )} */}
      <Image
        src={src}
        objectFit="cover"
        width="100%"
        height="100%"
        {...props}
        // src={onErrorSrc || src}
        // onLoadingComplete={() => !props.debug && setLoading(false)}
        // onError={e => handleOnError(e)}
      />
    </>
  )
}

export {ImageWithState}
