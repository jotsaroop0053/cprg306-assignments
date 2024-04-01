import Image from 'next/image'
import Link from 'next/link'
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      
      <div> 
        <text className='font-bold'>CPRG-306 WEEK ASSIGNMENTS</text>
      </div>
      <Link href="week-2">Week-2 ASSIGNMENT</Link>
      <Link href="week-3">Week-3 ASSIGNMENT</Link>
      <Link href="week-4">Week-4 ASSIGNMENT</Link>
      <Link href="week-5">Week-5 ASSIGNMENT</Link>
      <Link href="week-6">Week-6 ASSIGNMENT</Link>
      <Link href="week-7">Week-7 ASSIGNMENT</Link>
      <Link href="week-8">Week-8 ASSIGNMENT</Link>
      <Link href="week-10">Week-10 ASSIGNMENT</Link>
    </main>
  )
}
