import {connectToDB} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const {token} = reqBody.token;

        console.log(token);

        const user = await User.findOne({verifyToken : token , verifyTokenExpiry : {$gt : Date.now()}});
        console.log(user)
        if(!user){
            return NextResponse.json({ error: "Invalid token" }, { status: 400 });
        }

        user.verifyToken = undefined;
        user.isVerify = true;
        user.verifyTokenExpiry = undefined;

        await user.save();
        
        return NextResponse.json({ 
            message : "Token verify",
            success : true
         }, { status: 500 });

    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
        
    }
}