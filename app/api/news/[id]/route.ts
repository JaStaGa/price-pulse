import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    const NEWS_API_KEY = process.env.NEWS_API_KEY;
    const BASE_URL = "https://newsdata.io/api/1/news";
    const url = `${BASE_URL}?apikey=${NEWS_API_KEY}&q=${id}&language=en&category=business`;

    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json(data);
}
