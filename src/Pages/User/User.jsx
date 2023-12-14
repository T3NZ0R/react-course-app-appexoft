import React, {useEffect} from 'react';
import {useUser} from "../../hooks/useUser";
import {Link} from "react-router-dom";

const User = () => {

    const {user, createUserStatus, createPost} = useUser();
    const {name, username, email, id} = user;

    useEffect(() => {
        console.log(createUserStatus);
    }, [createUserStatus])

    return (
        <div>
            {id}--{name}--{username}--{email}--<Link to={"posts"}>Posts</Link>
            <button onClick={createPost}>Add Post</button>
        </div>
    );
};

export default User;
