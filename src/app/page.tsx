import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-gray-50">
      <h1>Barber Pro</h1>
      <Link href={"/login"}>Login</Link>

    </main>
  )
}
