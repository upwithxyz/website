import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(Component => props =>
      sheet.collectStyles(<Component {...props} />
    ))

    const styles = sheet.getStyleElement()

    return { ...page, styles }
  }

  render () {
    const { styles } = this.props

    return (
      <html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />

          {styles}
       </Head>

       <body>
         <div className="root">
           <Main />
         </div>

         <NextScript />
       </body>
     </html>
    )
  }
}
