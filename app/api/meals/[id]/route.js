import { NextResponse } from "next/server";

import connectDB from "@/app/config/db";
import Meal from "@/app/models/Meal";




export async function DELETE(request, { params }) {

    try {
       await connectDB()
       const id = params.id;
 
       await Meal.findByIdAndDelete(id);
       return NextResponse.json({ message: "Deleted successfully", id });
    } catch (error) {
       return NextResponse.json({ message: "Deleted unsuccessfully", id });
    }
 }





// ************************************** Edit Meal Start **************************************
 export async function PUT(request, { params }) {
   try {
       await connectDB();
       const id = params.id;
       const { categoryid,title, image , description , price } = await request.json(); // Expecting JSON data

       const updatedCategory = await Meal.findByIdAndUpdate(
           id,
           {categoryid, title, image , description , price }, // Update both title and image
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

// ************************************** Edit Meal End **************************************