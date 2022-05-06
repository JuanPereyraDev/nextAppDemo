import Link from 'next/link'
import { LayoutMain } from '../components/Layout/LayoutMain'

const ContactPage = () => {

    return (

        <LayoutMain>
            
            <h1>Contact Page</h1>
                <hr />
            <h1 className={'title'}>
                {/*Ir a <a href="/about">About</a>*/}
                Go to <Link href='/about' >HomePage</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/contact.tsx</code>
            </p>

        </LayoutMain>

    )

}
export default ContactPage;
