import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require:[true,'userName is required'],
        unique:[true,'userName Already exits']
    },
    email: {
        type: String,
        require:[true,'email is required'],
        unique:[true,'email Already exits']
    },
    image:String
})

const userModel = mongoose.models.PromptUser || mongoose.model('PromptUser', userSchema)
export default userModel