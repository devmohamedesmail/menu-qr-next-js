import connectDB from "@/app/config/db";
import Category from "@/app/models/Category";
import { NextResponse } from "next/server";

import { writeFile } from "fs/promises";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";



export const config = { api: { bodyParser: false } };


export async function GET(request) {
    try {
        await connectDB();
        const categories = await Category.find();
        return new Response(JSON.stringify(categories));
    } catch (error) {

    }
}






export async function POST(request) {

    await connectDB();
    const formData = await request.formData();
    const title = formData.get('title');
    const image = formData.get('image');

    const uploadDir = join(process.cwd(), "public/uploads");
    if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = `${Date.now()}-${image.name}`;
    const filePath = join(uploadDir, fileName);

    // Save file to the public folder
    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(filePath, buffer);

    // const category = new Category();
    // category.title = title;
    const category = new Category({
        title,
        image: `/uploads/${fileName}`, // Store the relative path
    });
    await category.save();
    return NextResponse.json({ formData, title, image });
}



export async function DELETE(request, { params }) {
    // const { searchParams } = new URL(request.url);
    //     const id = searchParams.get("id");
    return NextResponse.json({ message: "Deleted successfully" });
}