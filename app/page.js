import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items- p-24 ">
      <Link href="./week-2">Week-2 Assignment</Link>
      <Link href="./week-3">Week-3 Assignment</Link>
      <Link href="./week-4">Week-4 Assignment</Link>
      <Link href="./week-5">Week-5 Assignment</Link>
    </main>
  )
}
