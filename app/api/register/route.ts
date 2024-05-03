import bcrypt from "bcrypt";
import validator from "validator";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  if (!validator.isEmail(email)) {
    const errorResponse = {
      error: "Invalid email format",
      status: 400,
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }

  if (password.length < 8) {
    const errorResponse = {
      error: "Password must be at least 8 characters long",
      status: 400,
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 13);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
