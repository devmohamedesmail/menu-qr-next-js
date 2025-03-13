import connectDB from "@/app/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";
import Offer from "@/app/models/Offer";


export async  function GET(request) {
    try {
        await connectDB();
        const offers = await Offer.find();
        return new Response(JSON.stringify(offers));
    } catch (error) {
        console.log(error);
    }
}




// post function
export async function POST(request) {


    try {
        await connectDB();
        const formData = await request.formData();
       
        const title = formData.get('title');
        const price = parseFloat(formData.get('price'));
        const discount = parseFloat(formData.get('discount'));
        const description = formData.get('description');
        const image = formData.get('image');

        console.log("Received Data:", {
          
            title,
            price,
            discount,
            description,
            image,
        });



        const uploadDir = join(process.cwd(), "public/uploads");
        if (!existsSync(uploadDir)) {
            mkdirSync(uploadDir, { recursive: true });
        }

        const fileName = `${Date.now()}-${image.name}`;
        const filePath = join(uploadDir, fileName);

        // Save file to the public folder
        const buffer = Buffer.from(await image.arrayBuffer());
        await writeFile(filePath, buffer);

        const offer = new Offer({
            title,
            description,
            price,
            discount,
            image: `/uploads/${fileName}`, // Store the relative path
        });
        await offer.save();
        console.log("Offer saved successfully:", meal);
        return NextResponse.json({ "message": "Meal added successfully", meal });
    } catch (error) {
        return NextResponse.json({ "message": "Failed to Store Meal", error });
    }
}