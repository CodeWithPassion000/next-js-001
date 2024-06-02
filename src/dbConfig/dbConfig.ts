import mongoose from "mongoose";


export async function connect (){
    if(mongoose.connections[0].readyState){
        return
    }
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDb conneced succesfully')
        })
    }catch(error){
        console.log('somthing went wrong with Db connection');
        console.error(error);
        process.exit();
    }
}