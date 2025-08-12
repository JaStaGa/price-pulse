// lib/fetchCryptoChart.ts

export interface ChartPoint {
    time: number;
    price: number;
}

export async function fetchCryptoChart(coinId: string): Promise<ChartPoint[]> {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1`;

    const res = await fetch(url, {
        headers: { Accept: "application/json" },
        next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
        throw new Error(`Chart fetch failed: ${res.status}`);
    }

    const data = await res.json();

    return data.prices.map(([timestamp, price]: [number, number]) => ({
        time: timestamp,
        price,
    }));
}
