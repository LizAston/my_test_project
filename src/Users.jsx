import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import UserCard from "./UserCard"

const Users = () => {

    const [users, setUsers] = useState();
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users`).then((res) => {
          const responseUsers = res.data;
          setUsers(responseUsers);
      });
    }, []);

    return (
      <>{users ? 
      (
      <div style = {{display: "flex", flexWrap: "wrap"}}>
          {users.map((user) => (
            <UserCard user={user} />
          ))}
      </div>
      )
      : <CircularProgress />}
      </>
    );
};

export default Users;