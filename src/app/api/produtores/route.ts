import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([{ id: 1, nome: "Produtor Exemplo" }]);
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json(data, { status: 201 });
}