import Link from 'next/link';
import { LayoutDark } from '../components/Layout/LayoutDark';
import { LayoutMain } from '../components/Layout/LayoutMain';

const AboutPage = () => {

    return (

        <>
                <h1>AboutPage</h1>

                <h1 className={'title'}>
                    {/*Ir a <a href="/">HomePage</a>*/}
                    Go to <Link href='/' >HomePage</Link>
                </h1>

                <p className={'description'}>
                    Get started by editing{' '}
                    <code className={'code'}>pages/about.tsx</code>
                </p>
        </>

    )

};

export default AboutPage;

AboutPage.getLayout = function getLayout (page:JSX.IntrinsicElements) {
    return(
        <LayoutMain>
            <LayoutDark>
                {page}
            </LayoutDark>
        </LayoutMain>
    )
}

