export async function generateSummary(text: string): Promise<string | null> {
    const res = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.HF_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: text }),
    });

    // Log full response body BEFORE parsing
    console.log("🧠 HF raw response:", await res.text());

    if (!res.ok) return null;

    // Re-fetch because the response body was already consumed
    const resRetry = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.HF_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: text }),
    });

    const data = await resRetry.json();
    return data[0]?.summary_text || null;
}
