import { NextResponse } from "next/server";
import Task from "../../../(models)/Task";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    const res = await Task.findByIdAndDelete(id);
    if (res) {
      return NextResponse.json({ message: "Task deleted!" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const taskData = await Task.findOne({ _id: id });
    console.log({ taskData });
    if (taskData) {
      return NextResponse.json({ taskData }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
