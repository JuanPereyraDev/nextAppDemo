import styles from './Layout.module.css'
import Head from 'next/head'
import React from 'react'
import { Navbar } from '../Navbar';

interface Prop{
    children: JSX.Element | JSX.Element[];
}


export const LayoutMain = ({children}:Prop) => {
    return (

        <div className={styles.container}>

        <Head>
            <title>Next App</title>
            <meta name="description" content="next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>

        <main className={styles.main}>

            { children }

        </main>

        </div>

    )
}
