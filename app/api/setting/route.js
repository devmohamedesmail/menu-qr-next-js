import connectDB from "@/app/config/db";
import Setting from "@/app/models/Setting";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";



export async function GET(request) {
    try {
        await connectDB();
        const setting = await Setting.findOne();
        if (!setting) {
            return NextResponse.json({ message: "No settings found" }, { status: 404 });
        }

        return new Response(JSON.stringify(setting));
    } catch (error) {
        console.error("Error fetching setting:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 }); 
    }
}








export async function POST(request) {
    try {
        await connectDB();
        const formData = await request.formData();
        const name = formData.get("name");
        const currency = formData.get("currency");
        const image = formData.get("image");

        if (!name) {
            return NextResponse.json({ error: "Name is required" }, { status: 400 });
        }

        let imagePath = null;

        if (image) {
            const uploadDir = join(process.cwd(), "public/uploads");
            if (!existsSync(uploadDir)) {
                mkdirSync(uploadDir, { recursive: true });
            }

            const fileName = `${Date.now()}-${image.name}`;
            const filePath = join(uploadDir, fileName);
            const buffer = Buffer.from(await image.arrayBuffer());
            await writeFile(filePath, buffer);
            imagePath = `/uploads/${fileName}`;
        }

        // Check if a setting record already exists
        let existingSetting = await Setting.findOne();

        if (existingSetting) {
            // Update the existing record
            existingSetting.name = name || existingSetting.name;
            existingSetting.currency = currency || existingSetting.currency;
            existingSetting.image = imagePath || existingSetting.image; // Only update image if provided

            await existingSetting.save();
            return NextResponse.json({ message: "Setting updated successfully", setting: existingSetting });
        } else {
            // Create a new record if none exists
            const newSetting = new Setting({
                name,
                currency,
                image: imagePath,
            });

            await newSetting.save();
            return NextResponse.json({ message: "New setting created successfully", setting: newSetting });
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
