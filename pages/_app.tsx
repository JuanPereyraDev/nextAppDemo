import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement } from 'react';


type NextPageWhitLayout = NextPage & {
  getLayout?: (page:ReactElement)=>JSX.Element | JSX.Element[];
};

type NextAppPropsWhitLayout = AppProps & {
  Component: NextPageWhitLayout;
}

function MyApp({ Component, pageProps }: NextAppPropsWhitLayout) {

  const getLayout = Component.getLayout || ((page:JSX.Element)=>page);

  return getLayout( <Component {...pageProps} /> );
  //return <Component {...pageProps} />

}

export default MyApp
