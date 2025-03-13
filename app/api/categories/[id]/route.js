import { NextResponse } from "next/server";
import Category from "@/app/models/Category";
import connectDB from "@/app/config/db";


export async function DELETE(request, { params }) {

   try {
      await connectDB()
      const id = params.id;

      await Category.findByIdAndDelete(id);
      return NextResponse.json({ message: "Deleted successfully", id });
   } catch (error) {
      return NextResponse.json({ message: "Deleted unsuccessfully", id });
   }
}



// edit category info
export async function PUT(request, { params }) {
   try {
       await connectDB();
       const id = params.id;
       const { title, image } = await request.json(); // Expecting JSON data

       const updatedCategory = await Category.findByIdAndUpdate(
           id,
           { title, image }, // Update both title and image
           { new: true }
       );

       if (!updatedCategory) {
           return NextResponse.json({ message: "Category not found" }, { status: 404 });
       }

       return NextResponse.json({ message: "Category updated successfully", updatedCategory }, { status: 200 });
   } catch (error) {
       return NextResponse.json({ message: "Error updating category", error: error.message }, { status: 500 });
   }
}