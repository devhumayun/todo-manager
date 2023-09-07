import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        requried: [true, "Name is requried"]
    },
    email: {
        type: String,
        requried: [true, "Email is requried"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Password Required !!"],
    },
    about: String,
    profileURL: String,
})

export const User =mongoose.models.users || mongoose.model("users", userSchema)