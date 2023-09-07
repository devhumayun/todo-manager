import {connectMongoDB}  from "@/dbConfig/db"
import { NextResponse } from "next/server"

connectMongoDB()
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
