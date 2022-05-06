import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';



interface Props {
    text:string;
    href:string
}
const styles:CSSProperties= {
    color:'#0070f3',
    textDecoration:'underline'
}

export const ActiveLink = ({text, href}:Props) => {

    const { pathname } = useRouter();

    return (
        <>
            <Link href={href}>
                <a style={ pathname === href ? styles : undefined }> { text } </a>
            </Link>
        </>
    )

}
