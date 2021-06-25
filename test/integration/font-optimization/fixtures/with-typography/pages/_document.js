import * as React from 'react'
/// @ts-ignore
import Document, { Main, NextScript, Head } from 'next/document'
export default class MyDocument extends Document {
  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cloud.typography.com/759638/676208/css/fonts.css"
          />
          {false && <script data-href="test"></script>}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
