import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa_IR" dir="rtl">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Content-Language" content="fa" />

        {/* <link rel="shortcut icon" href="/" /> */}
        {/* <link rel="apple-touch-icon" sizes="128x128" href="/" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        {/* <meta name="description" content="" /> */}
        {/* <meta property="og:title" content="" /> */}
        {/* <meta name="keywords" content="" /> */}
        <meta name="author" content="Mojtaba Moradli" />
        <link href="https://mojtabamoradli.ir/" rel="canonical" />
        <meta name="theme-color" content="#fff" />
      </Head>

      <body className="font-IRANYekan">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
