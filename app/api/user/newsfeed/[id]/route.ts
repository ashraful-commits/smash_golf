import { MongoDbConection } from "@/config/MongodbConection";
import NewsFeedModel from "@/model/Newsfeed";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: string }) {
  MongoDbConection();
  const id = params.id;
  const data = await req.json();

  const newsFeed = await NewsFeedModel.findByIdAndUpdate(
    id,
    { ...data },
    { new: true }
  );
  return NextResponse.json({ newsfeed: newsFeed });
}
export async function DELETE(req: Request, { params }: { params: string }) {
  MongoDbConection();
  const id = params.id;
  const newsFeed = await NewsFeedModel.findByIdAndDelete(id);
  return NextResponse.json({ newsfeed: newsFeed });
}
