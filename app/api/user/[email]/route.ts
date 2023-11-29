import { MongoDbConection } from "@/config/MongodbConection";
import UserModel from "@/model/User";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }) {
  const email = params.email;
  MongoDbConection();
  const singleData = await UserModel.findOne({ email });
  return NextResponse.json({ user: singleData });
}

export async function HEAD(req: Request) {}

export async function POST(req: Request) {}

export async function PUT(req: Request) {}

export async function DELETE(req: Request) {}

export async function PATCH(req: Request) {}
