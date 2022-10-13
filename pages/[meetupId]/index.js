import MeetDetails from "../../components/MeetuPDetails";
import {MongoClient,ObjectId} from "mongodb"


function MeetUpDetails({MeetupData}){
    return(
        <>
       <MeetDetails 
       image ={MeetupData.image}
       title={MeetupData.title}
       description={MeetupData.description}
       address={MeetupData.address}

       ></MeetDetails>
        </>
    )
}

export async function getStaticPaths(){

        const connect =  await MongoClient.connect("mongodb+srv://ismayito:Kpbnuz7VfukcuGoa@cluster0.mwv8gkv.mongodb.net/meetups?retryWrites=true&w=majority")
        const db = connect.db();
        const collections = db.collection("meetups");
        const result = await collections.find({},{_id:1}).toArray();
        connect.close();

    return{
        fallback:false,
        paths:result.map(item=>({params:{ meetupId:item._id.toString()}}))
        // paths:[
        //     {
        //         params:{
        //        meetupId: "id1",
               
        //         }
        //     },
        //     {
        //         params:{
        //        meetupId: "id2",
               
        //         }
        //     }
            
        // ]
    }
}
export async function getStaticProps(context){


    const meetupId = context.params.meetupId;
    console.log(meetupId);
    const connect =  await MongoClient.connect("mongodb+srv://ismayito:Kpbnuz7VfukcuGoa@cluster0.mwv8gkv.mongodb.net/meetups?retryWrites=true&w=majority")
    const db = connect.db();
    const collections = db.collection("meetups");

    const meetup=await collections.findOne({_id:ObjectId(meetupId)});
    console.log(meetup);
    connect.close()



    return{ 
        props:{
        MeetupData:{
            id:meetup._id.toString(),
            title:meetup.title,
            image:meetup.image,
            address:meetup.address,
            description:meetup.description
        }
        
        // {
        // image:"https://www.bing.com/th?id=OIP.1M80h3aOEQD9-JPgRL1GzwHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        // title:"Meeetup",
        // description:"it our first meetup and its once the first one it has to be super good",
        // address:"kenya-nairobi",
        // id:meetupId
        // }

    }}

}
export default MeetUpDetails;