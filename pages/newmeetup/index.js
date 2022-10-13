import { useRouter } from "next/router";
import NewMeetupForm from "../../components/MeetupForm/MeetupForm";
function NewMeetUp(){
    const router= useRouter();
   async function newmeetup(enteredTitle){
        console.log(enteredTitle);
    const response= await fetch('/api/meet-up',{ method:"POST",body:JSON.stringify(enteredTitle),headers:{'content-type':"application/json"}})

    const data = response.json();
    console.log(data);
    router.push("/")
    }
    


    return(
        
         <NewMeetupForm onAddMeetup={newmeetup}></NewMeetupForm>
    )
}
export default NewMeetUp;