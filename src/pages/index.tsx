import * as React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'

import {HeroCarousel} from 'components/HeroCarousel'

import {ProductsGrid} from 'components/ProductsGrid'

const Index = ({home, products}) => {
  const {carouselItems} = home
  return (
    <>
      <HeroCarousel items={carouselItems} />
      {/* <NavMenu.Mobile /> */}
      <ProductsGrid products={products} />
    </>
  )
}

export default Index

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4aforec26g701xu8scl62u9/master',
    cache: new InMemoryCache(),
  })

  const carouselData = await client.query({
    query: gql`
      query MyQuery {
        page(where: {slug: "home"}) {
          id
          slug
          name
          carouselItems {
            size
            url
            fileName
          }
        }
      }
    `,
  })
  const productData = await client.query({
    query: gql`
      query MyQuery {
        products(first: 3) {
          id
          name
          price
          slug
          image {
            url
            fileName
            height
            width
          }
        }
      }
    `,
  })

  const home = carouselData.data.page
  const products = productData.data.products

  return {
    props: {home, products},
  }
}
