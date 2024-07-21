import { NextResponse } from "next/server";
import User from "../../(models)/User";
import { connectToDatabase } from "../../lib/mongoose";

export async function POST(req) {
  await connectToDatabase();
  const { email, password } = await req.json();

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const user = new User({ email, password });

    await user.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating user", error },
      { status: 500 }
    );
  }
}
