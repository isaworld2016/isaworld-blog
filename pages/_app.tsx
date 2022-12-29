import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { DefaultSeo } from "next-seo";
import SEO from "seo.config";
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
