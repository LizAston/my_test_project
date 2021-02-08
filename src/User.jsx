import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const User = () => {
    const { id } = useParams();

    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          const responseUser = res.data;
          setUserDetails(responseUser);
          console.log(responseUser);
      });
    }, [id]);

    const { id:userId, name, username, email, address, phone, website, company } = userDetails || {};
    const { street, suite, city, zipcode, geo } = address || {};
    const { lat, lng } = geo || {};
    const { name:companyName, catchPhrase, bs } = company || {};

    return (
      <div key={userId}>
        {userDetails ? (
        <div> 
            <h1> {`id: ${userId}`} </h1> 
            <h1> {`User name: ${name}`} </h1>
            <h1> {`User company name: ${companyName}`} </h1>
        </div>
        ) : (
            <CircularProgress />
        )}
      </div>
    );

}; 

export default User;