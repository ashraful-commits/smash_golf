import { MongoDbConection } from "@/config/MongodbConection";
import UserModel from "@/model/User";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  MongoDbConection();
  const data = await UserModel.find();
  return NextResponse.json({ message: data });
}
