import React, {useEffect, useState } from 'react';
import {fetchUsers } from '../services/api';

interface Address {
    street : string;
    suite : string;
    city: string;
    zipcode : string;
}

interface Company {
    name : string;
    catchPhrase : string ;
}

interface User {
    id : number;
    name : string;
    username : string;
    email: string;
    phone : string;
    website : string;
    address : Address;
    company : Company;
}

const UserList : React.FC = ()=>{
    const [users, setUsers] = useState <User[]> ([]);

    const [loading, setLoading ] = useState <boolean> (false);

    const [error, setError ] = useState<string | null >(null);

    useEffect (()=> {
        const loadUsers = async () =>{
            setLoading (true);
            setError(null);
            try {
                const data = await 
                fetchUsers();
                setUsers(data);

            }
            catch (error){
                setError ("failed to load users");
            } finally{
                setLoading (false);
            }
        };

    },[]);

    if (loading ){
        return <p> {error} </p>
    }

    return (
        <div>
            <h2>User List </h2>

            <ul>
                {users.map((user) =>(
                    <li key ={user.id}>
                        <h3>{user.name}</h3>
                        <p> Username : {user.username}</p>
                        <p> Email : {user.email}</p>
                        <p>phone : {user.phone}</p>
                        <p>Website: {user.website}</p>
                        <p>Address : {user.address.street},{user.address.city}</p>
                        <p> Company : {user.company.name} - {user.company.catchPhrase}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default UserList;