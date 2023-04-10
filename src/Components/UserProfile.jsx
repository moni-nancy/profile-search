const UserProfile = (props) => {
  return(
    <div className="card">
   <img src={props.picture} alt="data items" />
  
   <div className="card-content">
   <h6>{props.id}</h6>
    <p>{props.title} {props.firstName} {props.lastName}</p>
   </div>
    </div>
  );
};

export default UserProfile;