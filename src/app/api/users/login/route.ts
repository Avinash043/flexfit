import {connectToDB} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {password , email} = reqBody;

        const existUser = await User.findOne({email})

        if(!existUser){
            return NextResponse.json({ error: "User doesn`t exist" }, { status: 400 });
        }

        const validPassword = await bcryptjs.compare(password,existUser.password);

        if(!validPassword){
            return NextResponse.json({ error: "Password Incorrect" }, { status: 400 });
        }

        const tokenData = {
            id : existUser._id,
            username: existUser.username,
        }

       const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET! , {expiresIn : "1d"});

       const response = NextResponse.json({
        message : "User loggedIn",
        success: true
       })

       response.cookies.set("token",token,{
        httpOnly : false,
        path: "/",
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
       })

       return response;


    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
        
    }
}