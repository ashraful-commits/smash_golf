import { MongoDbConection } from "@/config/MongodbConection";
import UserModel from "@/model/User";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  MongoDbConection();
  const { name, email, password } = await request.json();
  const isExist = await UserModel.findOne({ email });
  if (isExist) {
    return NextResponse.json({ message: "Email Already Used" });
  } else {
    await UserModel.create({ name, email, password });
    return NextResponse.json({ message: "Registration successful!" });
  }
}
