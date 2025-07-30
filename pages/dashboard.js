import { useState } from "react"
import Head from "next/head"
import Header from "../components/Header"

export default function Dashboard() {
  const [balance, setBalance] = useState(0)

  return (
    <>
      <Head>
        <title>Dashboard | Pocket Invest</title>
      </Head>
      <Header />
      <main className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">My Dashboard</h2>
        <div className="bg-white shadow rounded p-6 mb-6">
          <p className="text-gray-600">Wallet Balance:</p>
          <h3 className="text-3xl font-semibold text-green-800">₦{balance.toLocaleString()}</h3>
        </div>
        <div className="space-y-4">
          <button className="w-full bg-green-600 text-white py-2 rounded">Deposit</button>
          <button className="w-full bg-gray-800 text-white py-2 rounded">Withdraw</button>
        </div>
      </main>
    </>
  )
    }
