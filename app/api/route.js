import connectDB from "../config/db";
import Category from "../models/Category";

export async function GET(request) {

    try {
        await connectDB();
        const Categories = await Category.find();
        return new Response(JSON.stringify(Categories));
    } catch (error) {
        
    }
   


        
}