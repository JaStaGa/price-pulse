import Image from "next/image";
import { CryptoMover, fetchTopCryptoMovers } from "@/lib/fetchCryptoMovers";
import CryptoChart from "@/app/components/CryptoChart";
import { fetchCryptoChart } from "@/lib/fetchCryptoChart";

export default async function Home() {
  const cryptoMovers: CryptoMover[] = await fetchTopCryptoMovers(); // top 10

  return (
    <main className="min-h-screen p-8 sm:p-12">
      <h1 className="text-3xl font-bold mb-6">📊 PricePulse</h1>
      <p className="text-lg text-gray-600 mb-10">Today&apos;s top market movers with AI-powered explanations.</p>

      <section>
        <h2 className="text-xl font-semibold mb-4">Crypto</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cryptoMovers.slice(0, 10).map((coin) => (
            <div key={coin.id} className="p-4 border rounded space-y-4">
              <div className="flex items-center gap-4">
                <Image src={coin.image} alt={coin.name} width={24} height={24} />
                <div>
                  <p className="font-medium">{coin.name} ({coin.symbol})</p>
                  <p className="text-sm text-gray-500">${coin.price.toFixed(2)}</p>
                </div>
                <p className={`ml-auto font-semibold ${coin.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {coin.change24h.toFixed(2)}%
                </p>
              </div>

              <a href={`/crypto/${coin.id}`} className="text-sm text-blue-600 hover:underline">
                View Info →
              </a>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


