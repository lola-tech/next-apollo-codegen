import { GetStaticProps } from 'next'
import { PageGetItemComp, ssrGetItem } from '../api/client/pages'

export const getStaticProps: GetStaticProps = async () => {
  const data = await ssrGetItem.getServerPage({})
  return {
    ...data,
    revalidate: 30,
  }
}

const StaticRevalidatingPage: PageGetItemComp = ({ data }) => {
  return (
    <>
      <h1>Static Page with Timed Revalidation</h1>
      <p>This page is rendered at build time. It is rerendered after any
                request which occurs more than 30 seconds after the last render.</p>
      <p>Content: {data?.item.content}</p>
      <p>Timestamp: {data?.item.timestamp}</p>
    </>
  )
}

export default StaticRevalidatingPage
