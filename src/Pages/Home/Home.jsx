import React, {useEffect} from 'react';
import Users from "../../Components/Users/Users";
import {getAllUsers} from "../../store/users.slice";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {

    const {state} = useSelector(state => state['usersReducer']);

    console.log(state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())

    }, [dispatch])


    return (
        <div>
            <h1>Home</h1>
            <Users users={state}/>
        </div>
    );
};

export default Home;
