import { NextResponse } from "next/server";

const produtores = [{ id: "1", nome: "Exemplo", cpfCnpj: "12345678900" }];

export async function GET() {
  return NextResponse.json(produtores);
}

export async function POST(req: Request) {
  const data = await req.json();
  produtores.push(data);
  return NextResponse.json(data, { status: 201 });
}