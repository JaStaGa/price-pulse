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
                <YAxis
                    domain={["auto", "auto"]}
                    tickFormatter={(v) => `$${v.toFixed(2)}`}
                    stroke="#94a3b8"
                />
                <XAxis tick={false} stroke="#94a3b8" />
                <Tooltip
                    contentStyle={{ backgroundColor: "#1e293b", border: "none" }}
                    labelStyle={{ color: "#cbd5e1" }}
                    itemStyle={{ color: "#cbd5e1" }}
                />
                <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
}
