import Link from 'next/link';

export default function About() {
  return (
    <main>
      <h1>o mnie</h1>
      <Link href='/'>home</Link>
      <br />
      <Link href='/contact'>kontakt</Link>
    </main>
  );
}
