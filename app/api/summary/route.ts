import { NextResponse } from "next/server";
import { generateSummary } from "@/lib/generateSummary";

export async function POST(req: Request) {
    const { text } = await req.json();
    const summary = await generateSummary(text);
    return NextResponse.json({ summary });
}
