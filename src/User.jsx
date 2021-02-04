import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const User = () => {
    const { id } = useParams();

    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          const responseUser = res.data;
          setUserDetails(responseUser);
      });
      // eslint-disable-next-line
    }, []);

    const { id, name, username, email, address:{street, suite, city, zipcode, 
        geo: {lat, lng}}, phone, website, company: {companyName, catchPhrase, bs} } = userDetails || {};

    return (
      <div>
        {userDetails ? (
        <div> 
            <h1> {`id: ${id}`} </h1> 
            <h1> {`User name: ${name}`} </h1>
            <h1> {`User company name: ${company.companyName}`} </h1>
        </div>
        ) : (
            <CircularProgress />
        )}
      </div>
    );

}; 

export default User;