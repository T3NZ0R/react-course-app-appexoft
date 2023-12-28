import React, { useEffect } from 'react';
import Users from '../../Components/Users/Users';
import { getAllUsers } from '../../store/users.slice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const {users, status} = useSelector(state => state['usersReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, []);


    return (
        <div>
            <h1>Home</h1>
            {status === "Loading finished!" ? (
                <Users users={users} />
            ) : status === "Loading..." ? (
                <h1 style={{ color: "red" }}>Loading users...</h1>
            ) : (
                <h1 style={{ color: "red" }}>Error fetching users</h1>
            )}
        </div>
    );
};

export default Home;
