import classes from "./MeetuPDetails.module.css"
function MeetDetails(props){
    return(
        <section className={classes.detail}>
        <img src={props.image}  alt={props.title}/>
        <p>{props.title}</p>
        <address>{props.address}</address>
        <p>{props.description}</p>
        </section>
    )

}
export default MeetDetails;