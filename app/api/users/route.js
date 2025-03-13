import connectDB from "@/app/config/db";
import User from "@/app/models/User";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";




export async function POST(request) {
    try {
        await connectDB();
        const data = await request.json();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        const existingUser = await User.findOne({ email: data.email });
        if (existingUser) {
            return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
        }else{
            const newUser = new User();
            newUser.name = data.name;
            newUser.email = data.email;
            newUser.password = hashedPassword;
            await newUser.save();
            return new Response(JSON.stringify({ message: "User Registered Successfully", newUser }));
        }
        
    } catch (error) {
        console.log("The retoe",error)
    }
}