import {connectMongoDB}  from "@/dbConfig/db"
import { User } from "@/models/user"
import { NextResponse } from "next/server"

connectMongoDB()

export const POST = async (request) => {
    try {
        const { name, email  }  = await request.json()
        
        const userIsExist = await User.findOne({email})

        console.log(userIsExist);
        if(!userIsExist){
            return NextResponse.json({
                message: "User already exists with this email"
            })
        }
        const user = new User({
            name, email
        })

        const createUser = user.save()

        const response = NextResponse.json(user,{
            status: 201,
        })

        return response
    } catch (error) {
        console.log(error);
    }
}

export const  GET= (request) => {
  const users = [
    {
        name:"Humayun"
    },
    {
        name: "Mamaun"
    }
  ]
  return NextResponse.json(users)
}


