import { GetStaticProps } from 'next'
import { PageGetItemComp, ssrGetItem } from '../api/client/pages'
import { useGetItemQuery } from '../api/client/hooks'
import withApollo from '../api/client/withApollo'

export const getStaticProps: GetStaticProps = async () => {
  const data = await ssrGetItem.getServerPage({})
  return {
    props: {
      apolloState: data.props.apolloState
    }
  }
}

const StaticPage: PageGetItemComp = () => {
  const { data } = useGetItemQuery({
    fetchPolicy: 'cache-and-network'
  });
  return (
    <>
      <h1>Cache Hydration</h1>
      <p>This page is rendered at build time, the Apollo cache is populated with data fetch in getStaticProps, and then fetched from the cache using a query hook. When it hydrates on the client-side the hook respects the `cache-and-network` policy to render with the cached data, and then update in the background. You&apos;ll see the timestamp shift.</p>
      <p>Content: {data?.item.content}</p>
      <p>Timestamp: {data?.item.timestamp}</p>
    </>
  )
}

export default withApollo(StaticPage)
