import { fetchCryptoChart } from "@/lib/fetchCryptoChart";
import ClientPage from "./ClientPage";
import type { Metadata } from "next";

export default async function CryptoPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const chartData = await fetchCryptoChart(id);
    return <ClientPage id={id} chartData={chartData} />;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    return {
        title: `${id.toUpperCase()} | PricePulse`,
        description: `24h chart, news, and summary for ${id}`,
    };
}
