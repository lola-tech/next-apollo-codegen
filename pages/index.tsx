import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next with Apollo and graphql-codegen</title>
        <meta
          name="description"
          content="An example showing next.js, apollo server and client and codegen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next with Apollo and graphql-codegen</h1>

        <p className={styles.description}>These examples will work best when you run `yarn build` and then `yarn start`</p>

        <div className={styles.grid}>
          <Link href="/static">
            <a className={styles.card}>
              <h2>Static Page</h2>
              <p>
                This page is rendered at build-time. The data won&apos;t change
                without another build.
              </p>
            </a>
          </Link>

          <Link href="/static-with-revalidation">
            <a className={styles.card}>
              <h2>Static Page with Timed Revalidation</h2>
              <p>
                This page is rendered at build time. It is rerendered after any
                request which occurs more than 30 seconds after the last render.
              </p>
            </a>
          </Link>

          <Link href="/static-with-on-demand-revalidation">
            <a className={styles.card}>
              <h2>Static Page with On-demand Revalidation</h2>
              <p>
                This page is rendered at build time. It is revalidated whenever the `updateItem` mutation is processed.
              </p>
            </a>
          </Link>

          <Link href="/client">
            <a className={styles.card}>
              <h2>Client-side Data Fetching</h2>
              <p>
                This page is partially rendered at build-time. The data is
                fetched by apollo-client from the API when the page re-renders
                in the browser
              </p>
            </a>
          </Link>

          <Link href="/cache-hydration">
            <a className={styles.card}>
              <h2>Cache Hydration</h2>
              <p>
                This page is rendered at build time, the Apollo cache is populated with data fetch in getStaticProps, and then fetched from the cache using a query hook. When it hydrates on the client-side the hook respects the `cache-and-network` policy to render with the cached data, and then update in the background. You&apos;ll see the timestamp shift.
              </p>
            </a>
          </Link>

          <Link href="/mutate">
            <a className={styles.card}>
              <h2>Mutation</h2>
              <p>
                This page renders a form you can use to change the item&apos;s content. When the mutation takes place the &quot;on-demand revalidation&quot; page will get updated.
              </p>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
