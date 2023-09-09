import { connect } from "@/dbConfig/dbConfig";

import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
connect();
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, password } = reqBody;
    //check if user exists or not
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        {
          error: "User does not exist",
        },
        { status: 400 }
      );
    }
    //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password!);
    if (!validPassword) {
      return NextResponse.json({
        error: "Password in incorrect!",
      });
    }
    //create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    //create token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1h",
    });
    const response = NextResponse.json({
      message: "login successful",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message,
      },
      { status: 500 }
    );
  }
}
