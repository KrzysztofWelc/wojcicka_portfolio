import Link from "next/link";
import Image from 'next/image'


export default function Navbar(){
    return (
        <header className="flex justify-between align-middle mt-7 mb-3">
            <Image src='/logo.svg' alt='logo' width={200} height={50}/>

            <nav>
                <ul className="flex">
                    <li className="ml-6 whitespace-nowrap">
                        <Link href="">Home</Link>
                    </li>
                    <li className="ml-6 whitespace-nowrap">
                        <Link href="">Projects</Link>
                    </li>
                    <li className="ml-6 whitespace-nowrap">
                        <Link href="">Playground</Link>
                    </li>
                    <li className="ml-6 whitespace-nowrap">
                        <Link href="">About me</Link>
                    </li>
                    <li className="ml-6 whitespace-nowrap">
                        <Link href="">Contact</Link>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}