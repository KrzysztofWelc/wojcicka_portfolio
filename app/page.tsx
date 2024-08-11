import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>czesc jestem amdzia</h1>
      <Link href='/about'>o mnie</Link>
      <Link href='/contact'>kontakt</Link>
    </main>
  );
}
