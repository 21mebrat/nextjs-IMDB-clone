import mongoose from "mongoose"
export const  connectToDb = async() =>{
    console.log(process.env.DB_CONNCTION_STRING,'on db connection')
    let isConnected = false 
    mongoose.set('strictQuery',true)

    if(isConnected){
        return
    }
    try {
        mongoose.connect(process.env.DB_CONNCTION_STRING)
        isConnected = true
        console.log(isConnected,'at connescted or not')
    } catch (error) {
      console.log(error)  
    }
} 