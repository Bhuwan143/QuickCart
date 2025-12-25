<<<<<<< HEAD
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    _id:{ type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    imageUrl: {type: String, required:true},
    cartItems: { type: Object, default:{} }
}, { minimize: false})

const User = mongoose.models.user || mongoose.model('user', userSchema)

export default User
=======
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id:{ type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageUrl : { type: String, required: true },
    cartItems : { type: Object, default: {} }
},{ minimize: false })

const User = mongoose.models.user || mongoose.model('user',userSchema)

export default User;
>>>>>>> a13baf14a824b31435dce64d90a29c97739c7089
