import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    const { error } = await supabase
      .from("waitlist")
      .insert([{ name, email }]);

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}