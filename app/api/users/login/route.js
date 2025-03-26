import connectDB from "@/app/config/db";
import User from "@/app/models/User";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";




export async function POST(request) {
    try {
        await connectDB();
        const data = await request.json();
     
       // Find user by email
        const existingUser = await User.findOne({ email: data.email });
        
        if (!existingUser) {
            return new Response(JSON.stringify({ message: "User nott found" }), { status: 404 });
        }

        // Compare password
        const isMatch = await bcrypt.compare(data.password, existingUser.password);
        if (!isMatch) {
            return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
        }

        return new Response(JSON.stringify({ message: "Login successful", user: existingUser }), { status: 200 });


    } catch (error) {
        console.log("The retoe",error)
    } 
}



