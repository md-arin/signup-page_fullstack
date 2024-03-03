import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function GET(){
    return Response.json({
        email: "cyno@gmail.com",
        name: "lew"
    })
}

export async function POST(req: NextRequest){
    const body = await req.json();
    await prisma.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    
    return Response.json({
        msg: "You are logged in"
    })
}

