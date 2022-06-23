import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const users = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Kalid',
    },
];

const User = () => {

    const [userInfo, setUserIfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        let newArray = users.filter((user) => user.id == id);
        setUserIfo(newArray[0]);
        console.log(userInfo);
    }, [id]);




    return (
        <div>User {userInfo.name}</div>
    );
};

export default User;