import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-700">Pocket Invest</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="#">FAQ</Link>
        <button className="bg-green-600 text-white px-3 py-1 rounded">Login</button>
        <button className="bg-gray-800 text-white px-3 py-1 rounded">Register</button>
      </nav>
    </header>
  )
    }
