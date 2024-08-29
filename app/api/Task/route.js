import { NextResponse } from "next/server";
import Task from "../../(models)/Task";
import { connectToDatabase } from "../../lib/mongoose";

export async function POST(req) {
  console.log("Handling POST request");
  try {
    await connectToDatabase();
    const body = await req.json();
    const data = body.formData;
    // const res = await Task.create({ ...data, createdBy: req.user._id });
    const res = await Task.create(data);
    if (res) {
      return NextResponse.json(
        { message: "Task Created Successfully!" },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error creating task:", error.message, error.stack);
    return NextResponse.json(
      { message: "Failed to create", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  console.log("Handling GET request");
  try {
    await connectToDatabase();
    const task = await Task.find();
    return NextResponse.json({ task }, { status: 200 });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { message: "Failed to get task", error },
      { status: 500 }
    );
  }
}
