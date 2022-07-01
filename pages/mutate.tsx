import { NextPage } from 'next'
import { FormEvent } from 'react'
import { useGetItemQuery, useUpdateItemMutation } from '../api/client/hooks'
import withApollo from '../api/client/withApollo'

const ClientPage: NextPage = () => {
  const { data } = useGetItemQuery()
  const [updateItem] = useUpdateItemMutation()
  const onSub = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let content = (e.target as HTMLFormElement)['content'].value
    updateItem({
      variables: {
        item: {content}
      }
    })
    .then(() => fetch('/api/revalidate'))
    .then(() => alert('Item Content Updated'))
  }
  return (
    <>
      <h1>Mutation</h1>
      <p>This page lets you conduct a mutation, and, when that&apos;s sucessful, call the revalidation api</p>

      <form onSubmit={onSub}>
        <input type="text" name="content" defaultValue={data?.item.content} />
        <input type="submit" value="submit"/>
      </form>
    </>
  )
}

export default withApollo(ClientPage)
