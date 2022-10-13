
import MeetupList from '../components/Meetups/MeetupList'
import { MongoClient } from "mongodb";
function HomePage({result}){

//   const Mymeetups=[
       
//         {
//             id:1,
//             title:"meetup 1",
//             image:"https://www.bing.com/th?id=OIP.1M80h3aOEQD9-JPgRL1GzwHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
//             address:"kenturkey",
//             description:"its a"
//                },
//                {
//                 id:2,
//                 title:"meetup 2",
//                 image:"https://www.bing.com/th?id=OIP.z4xUrobKGmp6IR3vc_lk0gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
//                 address:"nairobi",
//                 description:"its a"
//                    },

//                    {
//                     id:3,
//                     title:"meetup 3",
//                     image:"https://www.bing.com/th?id=OIP.PHINU3h85VWVW-lPggZxjwHaHa&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
//                     address:"Dodoma",
//                     description:"its a"
//                        },
// ]

    return(
        
              <MeetupList meetups={result}></MeetupList>
      
    )
}

 export async function getStaticProps(){
    const connect =  await MongoClient.connect("mongodb+srv://ismayito:Kpbnuz7VfukcuGoa@cluster0.mwv8gkv.mongodb.net/meetups?retryWrites=true&w=majority")
    const db= connect.db();
    const collections =  db.collection("meetups");
    const result = await collections.find().toArray()
    console.log(result)
    connect.close();
//     const Mymeetups=[
       
//         {
//             id:1,
//             title:"meetup 1",
//             image:"https://www.bing.com/th?id=OIP.1M80h3aOEQD9-JPgRL1GzwHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
//             address:"kenturkey",
//             description:"its a"
//                },
//                {
//                 id:2,
//                 title:"meetup 2",
//                 image:"https://www.bing.com/th?id=OIP.z4xUrobKGmp6IR3vc_lk0gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
//                 address:"nairobi",
//                 description:"its a"
//                    },

//                    {
//                     id:3,
//                     title:"meetup 3",
//                     image:"https://www.bing.com/th?id=OIP.PHINU3h85VWVW-lPggZxjwHaHa&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
//                     address:"Dodoma",
//                     description:"its a"
//                        },
// ]

    //fetch Api data;
    return {
        props:{
            //Mymeetups
          result:result.map(item=>(
                {title:item.title,
                image:item.image,
                address:item.address,
                id:item._id.toString(),}
            ))
   ,
        },
        revalidate:10 // fetches the data from the server after every ten seconds once the site is deployed .
    }
 }
// export async function getServerSideProps(context){
//     const res=context.res;
//     const req=context.req;
//     //fetch api data from
//     const Mymeetups=[
       
//                 {
//                     id:1,
//                     title:"meetup 1",
//                     image:"https://www.bing.com/th?id=OIP.1M80h3aOEQD9-JPgRL1GzwHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
//                     address:"kenturkey",
//                     description:"its a"
//                        },
//                        {
//                         id:2,
//                         title:"meetup 2",
//                         image:"https://www.bing.com/th?id=OIP.z4xUrobKGmp6IR3vc_lk0gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
//                         address:"nairobi",
//                         description:"its a"
//                            },
        
//                            {
//                             id:3,
//                             title:"meetup 3",
//                             image:"https://www.bing.com/th?id=OIP.PHINU3h85VWVW-lPggZxjwHaHa&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
//                             address:"Dodoma",
//                             description:"its a"
//                                },
//         ]

//     return{
//         props:{
//             Mymeetups

//         }
//     }
// }
export default HomePage;