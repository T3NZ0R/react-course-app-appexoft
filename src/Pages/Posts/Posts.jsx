import React from 'react';
import {useUser} from "../../hooks/useUser";

const Posts = () => {

    const {userPosts} = useUser();
    console.log(userPosts);

    return (
        <div>
            {userPosts?.map(item => <div key={item.id}> {item.title}</div>)}
        </div>
    );
};

export default Posts;
