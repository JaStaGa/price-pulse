// lib/fetchCryptoMovers.ts

export interface CryptoMover {
    id: string;
    name: string;
    symbol: string;
    price: number;
    change24h: number;
    image: string;
}

export async function fetchTopCryptoMovers(): Promise<CryptoMover[]> {
    const url = "https://api.coingecko.com/api/v3/coins/markets" +
        "?vs_currency=usd&order=percent_change_24h_desc&per_page=10&page=1" +
        "&sparkline=false&price_change_percentage=24h";

    const res = await fetch(url, {
        headers: { Accept: "application/json" },
        next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch movers: ${res.status}`);
    }

    const data = await res.json();

    return data.map((coin: {
        id: string;
        name: string;
        symbol: string;
        image: string;
        current_price: number;
        price_change_percentage_24h: number;
    }) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h,
        image: coin.image,
    }));
}
