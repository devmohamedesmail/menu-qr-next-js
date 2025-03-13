import connectDB from "@/app/config/db";
import Order from "@/app/models/Order";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
        await connectDB();
        const orders = await Order.find();
        return new Response(JSON.stringify(orders));
    } catch (error) {
        
    }
}



export async function POST(request) {
    try {
       await connectDB();
       const data = await request.json();
      
       const order = new Order()
       order.tableno = data.tableNo;
       order.meals = data.cart;
       await order.save();

       
       return NextResponse.json({ message: "Good" }, { status: 200 });
       
    } catch (error) {
        console.error("Error creating order:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}