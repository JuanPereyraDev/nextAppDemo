import Link from 'next/link'
import React from 'react'
import { LayoutMain } from '../../components/Layout/LayoutMain'

export const PricingPage = () => {

    return (

        <>
            <LayoutMain>

                <h1>Precing Page</h1>
                <hr />
                <h1 className={'title'}>
                    {/*Ir a <a href="/about">About</a>*/}
                    Go to <Link href='/' >Home</Link>page
                </h1>

                <p className='description'>
                    Get started by editing{' '}
                    <code className={'code'}>pages/pracing/index.tsx</code>
                </p>

            </LayoutMain>
            
        </>

    )
};

export default PricingPage
