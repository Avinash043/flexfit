import { connectToDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connectToDB();

export async function POST(request: NextRequest) {
 try {
   const userId = await getDataFromToken(request);
   console.log(userId);
   const user = await User.findOne({ _id: userId }).select("-password");
   if (!user) {
     return NextResponse.json({ error: "User not found" }, { status: 400 });
   }
   return NextResponse.json({
     message: "User found",
     data: user,
   });
 } catch (error:any) {
  return NextResponse.json({error: error.message}, {status: 400});
 }
}
