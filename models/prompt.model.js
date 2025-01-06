import mongoose from "mongoose";
const promptSchema = new mongoose.Schema({
    userId:String,
    prompt:{
        type:String,
        require:[true,'prompt is required']
    },
    tag:{
        type:String,
        require:[true,'Tag is required']
    }
})
const promptModel = mongoose.models.Prompt || mongoose.model('Prompt',promptSchema)
export default promptModel