
import { MongoDbConection } from "@/config/MongodbConection";
import GameModel from "@/model/Game";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  MongoDbConection();
  const data = await req.json();
  const game = await GameModel.create(data);
  return NextResponse.json({ game: game });
}
export async function GET(
  req: Request 
) {
  MongoDbConection();


  const game = await GameModel.find();
  return NextResponse.json({ game: game });
}
// export async function PUT(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   MongoDbConection();
//   const id = params.id;
//   const data = await req.json();

//   const game = await GameModel.findByIdAndUpdate(
//     id,
//     { ...data },
//     { new: true }
//   );
//   return NextResponse.json({ game: game });
// }
// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   MongoDbConection();
//   const id = params.id;
//   const game = await GameModel.findByIdAndDelete(id);
//   return NextResponse.json({ game: game });
// }
