import { NextResponse } from "next/server";

export async function POST(req){
try {
    const{name,email, password} =await req.json();

    console. log ("Name: ", name) ;
    console. log ("Email", email);
    console. log ("Password: ", password);
    return NextResponse.json({message :"user registered"},{status:200})
} catch (error) {
    return NextResponse.json({message:"error occured while registering"},{status:500})
}


}