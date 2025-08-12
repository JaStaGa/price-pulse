"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartPoint } from "@/lib/fetchCryptoChart";

interface Props {
    data: ChartPoint[];
}

export default function CryptoChart({ data }: Props) {
    return (
        <ResponsiveContainer width="100%" height={150}>
            <LineChart data={data}>
                <XAxis dataKey="time" tick={false} />
                <YAxis domain={["auto", "auto"]} tickFormatter={(v) => `$${v.toFixed(2)}`} />
                <Tooltip formatter={(v: number) => `$${v.toFixed(2)}`} />
                <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
}
