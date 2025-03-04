import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("query");
	console.log("query", query);
	return NextResponse.json({ query });
}
