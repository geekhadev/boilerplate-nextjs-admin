import Link from 'next/link'

export default function Page (): JSX.Element {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
