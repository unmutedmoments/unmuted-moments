import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    console.error("ConvertKit env vars not set (CONVERTKIT_API_KEY, CONVERTKIT_FORM_ID)");
    return NextResponse.json({ error: "Newsletter not configured" }, { status: 500 });
  }

  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, email }),
    }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
