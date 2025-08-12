"use client";
import NewsSummary from "@/app/components/NewsSummary";
import CryptoChart from "@/app/components/CryptoChart";
import { ChartPoint } from "@/lib/fetchCryptoChart";

export default function ClientPage({
    id,
    chartData,
}: {
    id: string;
    chartData: ChartPoint[];
}) {
    return (
        <main className="min-h-screen p-8 sm:p-12">
            <h1 className="text-2xl font-bold mb-6">{id.toUpperCase()} Chart</h1>
            <CryptoChart data={chartData} />
            <NewsSummary id={id} />
        </main>
    );
}
