import Meal from "@/app/models/Meal";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.id;

    const meals = await Meal.find({ categoryid: id });


    return NextResponse.json({ message: "Meals By Category fetched successfully",meals });
}