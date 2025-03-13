import connectDB from "@/app/config/db";
import Meal from "@/app/models/Meal";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";

export async function GET(request) {
    try {
        await connectDB();
        const meals = await Meal.find();
        return new Response(JSON.stringify(meals));
    } catch (error) {

    }

}





export async function POST(request) {


    try {
        await connectDB();
        const formData = await request.formData();
        const categoryId = formData.get('categoryId');
        const title = formData.get('title');
        const price = parseFloat(formData.get('price'));
        const description = formData.get('description');
        const image = formData.get('image');





        console.log("Received Data:", {
            categoryId,
            title,
            price,
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

        const meal = new Meal({
            categoryid: categoryId,
            description,
            price,
            title,
            image: `/uploads/${fileName}`, // Store the relative path
        });
        await meal.save();
        console.log("Meal saved successfully:", meal);
        return NextResponse.json({ "message": "Meal added successfully", meal });
    } catch (error) {
        return NextResponse.json({ "message": "Failed to Store Meal", error });
    }
}