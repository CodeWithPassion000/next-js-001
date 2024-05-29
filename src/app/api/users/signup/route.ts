import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/UserModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

connect()

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json()
        const {username,email,password} = reqBody;
        console.log(reqBody);

        // check user alreade exists

      const user = await User.findOne({email});
      if(user){
        return NextResponse.json({error:'User already exists'},{status:400})
      }

      // has password

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
     const newUser =  new User({
        username,
        email,
        password:hashedPassword
      })

      const savedUser = await newUser.save();
      console.log(savedUser);
      return NextResponse.json({
        message:'User created succesfully',
        success:true,
        savedUser
      })

    }catch(error:any){
        return NextResponse.json({error:error.messahe},{status:500})
    }
}









