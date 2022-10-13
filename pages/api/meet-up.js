

import { MongoClient } from "mongodb";
 async function handler(req,res){

    if(req.method==="POST"){
        const data=req.body;
         const connect=  await MongoClient.connect("mongodb+srv://ismayito:Kpbnuz7VfukcuGoa@cluster0.mwv8gkv.mongodb.net/meetups?retryWrites=true&w=majority")
        const db= connect.db();
        const collections= db.collection("meetups");

        const result = await collections.insertOne(data);
         console.log(result);
         connect.close();
         res.status(201).json({message:"meetup inserted"})
    }

}
 export default handler;