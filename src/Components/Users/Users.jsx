import React from 'react';
import User from "../User/User";

const Users = ({users}) => {

    return (
        <div>
            {users?.map(item => <User key={item.id} user={item}/>)}
        </div>
    );
};

export default Users;
