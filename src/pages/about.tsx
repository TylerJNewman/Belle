import {ApolloClient, InMemoryCache, gql} from '@apollo/client'
import React from 'react'

import {AspectRatio, Box, Text} from '@chakra-ui/react'

import Link from 'next/link'
import {RichText} from '@graphcms/rich-text-react-renderer'
import {ImageWithState} from 'components/ImageWithState'

const About = ({content}) => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-12 px-4">
        <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
          About Us
        </h1>
        <div className="lg:pt-12 md:pt-10 pt-8 flex md:flex-row flex-col lg:gap-8 md:gap-4 gap-12 justify-center">
          <div className="max-w-3xl">
            <RichText
              content={content}
              renderers={{
                h6: ({children}) => <Text mb={3}>{children}</Text>,
                bold: ({children}) => <strong>{children}</strong>,
                a: ({children, openInNewTab, href, rel, ...rest}) => {
                  if (href.match(/^https?:\/\/|^\/\//i)) {
                    return (
                      <a
                        href={href}
                        target={openInNewTab ? '_blank' : '_self'}
                        rel={rel || 'noopener noreferrer'}
                        {...rest}
                      >
                        {children}
                      </a>
                    )
                  }

                  return (
                    <Link href={href}>
                      <a {...rest}>{children}</a>
                    </Link>
                  )
                },
                img: ({src, ...rest}) => (
                  <Box my={20}>
                    <img src={src} />
                  </Box>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4aforec26g701xu8scl62u9/master',
    cache: new InMemoryCache(),
  })

  const aboutData = await client.query({
    query: gql`
      query MyQuery {
        page(where: {slug: "about"}) {
          id
          slug
          name
          content {
            raw
          }
        }
      }
    `,
  })

  const content = aboutData.data.page.content.raw

  return {
    props: {content},
  }
}

export default About
