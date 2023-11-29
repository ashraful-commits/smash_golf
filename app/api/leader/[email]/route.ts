import { MongoDbConection } from "@/config/MongodbConection";
import UserModel from "@/model/User";
import { NextResponse } from "next/server";

    export async function GET(req: Request, { params }) {
        const email = params.email;
        MongoDbConection();
        const singleData = await UserModel.findOne({ email });
        return NextResponse.json({ user: singleData });
      }

 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}