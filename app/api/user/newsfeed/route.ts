import { MongoDbConection } from "@/config/MongodbConection";
import NewsFeedModel from "@/model/Newsfeed";
import { NextResponse } from "next/server";

export async function GET(req: Request) {}
export async function HEAD(req: Request) {}

export async function POST(req: Request) {
  MongoDbConection();
  const data = await req.json();
  const newsFeed = await NewsFeedModel.create(data);
  return NextResponse.json({ newsfeed: newsFeed });
}



export async function DELETE(req: Request) {}

export async function PATCH(req: Request) {}
