import Link from 'next/link'
import { LayoutMain } from '../components/Layout/LayoutMain'
import styles from '../styles/Layout.module.css'

const HomePage = () => {

  return (

    <LayoutMain>

        <h1>Homepage</h1>
        <hr />
        <h1 className={'title'}>
          {/*Ir a <a href="/about">About</a>*/}
          Go to <Link href='/about' >About</Link>page
        </h1>

        <p className='description'>
          Get started by editing{' '}
          <code className={'code'}>pages/index.tsx</code>
        </p>
        
    </LayoutMain>

    

  )

}
export default HomePage
