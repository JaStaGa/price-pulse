import { fetchCryptoChart } from "@/lib/fetchCryptoChart";
import ClientPage from "./ClientPage";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function CryptoPage(props: Props) {
    const { id } = await props.params;
    const chartData = await fetchCryptoChart(id);

    return <ClientPage id={id} chartData={chartData} />;
}
