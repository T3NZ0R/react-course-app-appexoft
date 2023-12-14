import React from 'react';
import User from "../User/User";

const Users = ({users, setIsDelete}) => {

    return (
        <div>
            {users?.map(item => <User key={item.id} user={item} setIsDelete={setIsDelete}/>)}
        </div>
    );
};

export default Users;
