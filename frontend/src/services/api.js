import axios from 'axios';

const baseURL = 'http://localhost:3001';

const api = axios.create({
    baseURL,
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json', 
    },
});


export const getUsers = async () => {
    try {
        const response = await api.get('/api/getUsers');
        return response.data; 
    } catch (error) {
        console.error('Error fetching users:', error.message);
        throw error; 
    }
};

export const addUser = async (userData) => {
    try {
        const response = await api.post('/api/newUser', userData);
        return response.data; 
    } catch (error) {
        console.error('Error adding user:', error.message);
        throw error; 
    }
};

export const editUser = async (userId, updatedUserData) => {
    try {
        const response = await api.put(`/api/updateUser/${userId}`, updatedUserData);
        return response.data; 
    } catch (error) {
        console.error('Error editing user:', error.message);
        throw error; 
    }
};


export const deleteUser = async (userId) => {
    try {
        await api.delete(`/api/deleteUser/${userId}`);
    } catch (error) {
        console.error('Error deleting user:', error.message);
        throw error; 
    }
};
