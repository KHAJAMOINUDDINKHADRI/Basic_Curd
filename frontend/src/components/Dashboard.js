import React, { useEffect, useState } from 'react'
import UserTable from './UserTable';
import { getUsers, addUser, editUser, deleteUser } from '../services/api';
import AddUserForm from './AddUserForm';
import './style_table.css';


const Dashboard = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddUser = async (userData) => {
        try {
            await addUser(userData);
            fetchUsers();
        } catch (error) {
            console.log(error);
        }

    };

    const handleEditUser = async (userId, updatedUserData) => {
        try {
            await editUser(userId, updatedUserData);
            fetchUsers();
        } catch (error) {
            console.log(error);
        }

    };

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId);
            fetchUsers();
        } catch (error) {
            console.log(error);
        }

    };


    return (
        <div className='container'>
            <h1>User DashBoard</h1>
            <AddUserForm onAddUser={handleAddUser} />
            <UserTable user={users} onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} />
        </div>
    )
};

export default Dashboard;