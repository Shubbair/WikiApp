import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="UTF-8"/>    
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
          <link rel="stylesheet" href="css/tailwind.css"/>
        </Head>
        <body className="dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument