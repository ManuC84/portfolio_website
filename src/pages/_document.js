import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta
            name="description"
            content="I'm a highly motivated Web-Developer who is passionate about
            learning new technologies and working hard and smart to bring
            awesome full-stack applications to life."
          />
          <link rel="canonical" href="https://www.manuelcufre.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@manuelcufre3" />
          <meta property="og:url" content="https://www.manuelcufre.com/" />
          <meta
            property="og:title"
            content="Web-developer portfolio for Manuel Cufré"
          />
          <meta
            property="og:description"
            content="I'm a highly motivated Web-Developer who is passionate about
            learning new technologies and working hard and smart to bring
            awesome full-stack applications to life."
          />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/ManuC84/portfolio_website/master/public/images/social-image.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
