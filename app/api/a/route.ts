import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    try{
        await prisma.test.create({
            data: {
                name: "test",
                age: 20,
                email: "kigyokusai.pub@gmail.com"
        }})
        return new Response("ok", { status: 200 });
    }catch(error){
        return new Response("Internal Server Error", { status: 500 });
    }
}