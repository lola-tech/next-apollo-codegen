import { NextPage } from 'next'
import { useGetItemQuery } from '../api/client/hooks'
import withApollo from '../api/client/withApollo'

const ClientPage: NextPage = () => {
  const { data } = useGetItemQuery()
  return (
    <>
      <h1>Client-side Data Fetching</h1>
      <p>This page is partially rendered at build-time. The data is
                fetched by apollo-client from the API when the page re-renders
                in the browser</p>
      <p>Content: {data?.item.content}</p>
      <p>Timestamp: {data?.item.timestamp}</p>
    </>
  )
}

export default withApollo(ClientPage)
