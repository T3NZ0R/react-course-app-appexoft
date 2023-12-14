import React, {useEffect, useState} from 'react';
import {userService} from "../../Services/user.service";
import Users from "../../Components/Users/Users";

const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value))
    }, [])


    return (
        <div>
            <h1>Home</h1>
            <Users users={users}/>
        </div>
    );
};

export default Home;
