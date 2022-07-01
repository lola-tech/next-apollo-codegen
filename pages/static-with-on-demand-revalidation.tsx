import { GetStaticProps } from 'next'
import { PageGetItemComp, ssrGetItem } from '../api/client/pages'

export const getStaticProps: GetStaticProps = async () => {
  const data = await ssrGetItem.getServerPage({})
  return data
}

const StaticPage: PageGetItemComp = ({ data }) => {
  return (
    <>
      <h1>Static Page with On-demand Revalidation</h1>
      <p>This page is rendered at build time. It is revalidated whenever the revalidation api is called - such as when the `updateItem` mutation is processed.</p>
      <p>Content: {data?.item.content}</p>
      <p>Timestamp: {data?.item.timestamp}</p>
    </>
  )
}

export default StaticPage
