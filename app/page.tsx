import Image from "next/image";
import { CryptoMover, fetchTopCryptoMovers } from "@/lib/fetchCryptoMovers";


export default async function Home() {
  const cryptoMovers: CryptoMover[] = await fetchTopCryptoMovers(); // top 10

  return (
    <main className="min-h-screen p-8 sm:p-12">
      <h1 className="text-3xl font-bold mb-6">PricePulse</h1>
      <p className="text-lg text-gray-600 mb-10">Today&apos;s top market movers with AI-powered explanations.</p>

      <section>
        <h2 className="text-xl font-semibold mb-4">Crypto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptoMovers.slice(0, 10).map((coin) => (
            <div key={coin.id} className="p-4 bg-slate-800 rounded shadow-md border border-slate-700 transition hover:shadow-lg">
              <div className="flex items-center gap-4">
                <Image src={coin.image} alt={coin.name} width={24} height={24} />
                <div>
                  <p className="font-medium text-slate-100">{coin.name} ({coin.symbol})</p>
                  <p className="text-sm text-slate-400">${coin.price.toFixed(2)}</p>
                </div>
                <p className={`ml-auto font-semibold ${coin.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {coin.change24h.toFixed(2)}%
                </p>
              </div>

              <a href={`/crypto/${coin.id}`} className="text-sm text-blue-500 hover:underline">
                View Info →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


