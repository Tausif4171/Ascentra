import { NextResponse } from "next/server";
import User from "../../../(models)/User";
import { connectToDatabase } from "../../../lib/mongoose";

export async function POST(req) {
  await connectToDatabase();
  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isMatch = password == user.password;
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "User login successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error logging in", error },
      { status: 500 }
    );
  }
}
