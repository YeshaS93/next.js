import Head from 'next/head'

function Home({ stars }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cloud.typography.com/759638/676208/css/fonts.css"
        ></link>
      </Head>

      <main>
        <div>Next stars: {stars}</div>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => {
  return { stars: Math.random() * 1000 }
}

export default Home
