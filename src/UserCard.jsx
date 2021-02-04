import React from "react";
import { useHistory } from "react-router-dom";

const UserCard = (props) => {

    const {user} = props;
    const { id, name, company } = user;
    console.log(user);
    let history = useHistory();

    return (
        <div style={{ 
            backgroundColor: "grey", 
            margin: "10px", 
            padding: "15px", 
            width: "150px" 
            }}
            onClick={() => history.push(`/user/${id}`)}
        >
            <h4> {name} </h4>
            <h6> {`Company name: ${company.name}`} </h6>
        </div>
    );
};

export default UserCard;