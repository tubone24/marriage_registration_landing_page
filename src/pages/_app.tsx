import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=Nanum+Brush+Script&family=Nanum+Gothic&family=Nanum+Pen+Script&display=swap" rel="stylesheet" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>GitHub婚姻届</title>
          <meta property="og:title" content="GitHub婚姻届" />
          <meta
            property="og:description"
            content="ちょっと口下手なあなた。気になる人に婚姻届を出しましょう！このギットハブのレポジトリをフォークしてコンフィグにあなたの情報を書いてプルリクするだけ。ギットハブアクションズが回って、あっという間に婚姻届ができちゃう。"
          />
          <meta name="keywords" content="婚姻届, GitHubActions" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://marriage-registration-landing-page.vercel.app/"
          />
          <meta property="og:image" content="https://i.imgur.com/PXDvU3s.png" />
          <meta property="og:site_name" content="GitHub婚姻届" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@meitante1conan" />
          <meta
            name="twitter:url"
            content="https://marriage-registration-landing-page.vercel.app/"
          />
          <meta name="twitter:title" content="GitHub婚姻届" />
          <meta
            name="twitter:description"
            content="This template implements Next.js with TypeScript, uses ChakraUI for CSS, uses Jest for testing, StoryBook for cataloging components, and Recoil for state management by tubone24."
          />
          <meta name="twitter:image" content="https://i.imgur.com/PXDvU3s.png" />
          <meta property="fb:app_id" content="280941406476272" />
          <link rel="canonical" href="ttps://marriage-registration-landing-page.vercel.app/" />
          <link rel="apple-touch-icon" href={'https://i.imgur.com/PXDvU3s.png'} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}
