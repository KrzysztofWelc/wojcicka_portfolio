import Link from "next/link";

export default function Contact(){
    return (
        <main>
            <h1>contact</h1>
            <Link href='/'>home</Link><br/>
            <Link href='/about'>o mnie</Link>
        </main>
    )
}