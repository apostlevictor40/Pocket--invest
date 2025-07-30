import Head from "next/head"
import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <Head>
        <title>Pocket Invest</title>
      </Head>
      <Header />
      <main
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
        style={{ backgroundImage: "url('/naira-bg.jpg')" }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg text-center max-w-xl">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Invest Smart, Grow Your Wealth
          </h2>
          <p className="text-gray-700 mb-6">
            Pocket Invest helps Nigerians grow their wealth through secure and
            automated Naira-based investments.
          </p>
          <div className="space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Get Started
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </>
  )
    }
