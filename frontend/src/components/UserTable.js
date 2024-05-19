import React, { useState } from 'react';
import { Button, Table, TableRow, TableCell, TableBody, TableHead, TextField, TableContainer, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './style_table.css'

const UserTable = ({ user, onEditUser, onDeleteUser }) => {
    const [editMode, setEditMode] = useState(null);
    const [editUserData, setEditUserData] = useState({});

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditUserData({ ...editUserData, [name]: value });
    };

    const handleEditSubmit = (userId) => {
        onEditUser(userId, editUserData);
        setEditMode(null);
    };

    return (
        <TableContainer component={Table} sx={{ maxWidth:1200,border: '2px solid', marginBottom:'40px' }} >
            <Table aria-label="simple table" >
                <TableHead >
                    <TableRow >
                        <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }} >Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }} >Email</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }} >Phone Number</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }} >Date Of Birth</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }} >Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        user.map(user => (
                            <TableRow key={user.id}>
                                <TableCell sx={{ textAlign: 'center' }} >
                                    {editMode === user.id ? (
                                        <TextField
                                            name="Name"
                                            value={editUserData.Name}
                                            onChange={handleEditChange}
                                            style={{ textAlign: 'center'}} 
                                        />
                                    ) : (
                                        user.Name
                                    )}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center' }} >
                                    {editMode === user.id ? (
                                        <TextField
                                            name="Email"
                                            value={editUserData.Email}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        user.Email
                                    )}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center' }} >
                                    {editMode === user.id ? (
                                        <TextField
                                            name="Phone_Number"
                                            value={editUserData.Phone_Number}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        user.Phone_Number
                                    )}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center' }} >
                                    {editMode === user.id ? (
                                        <TextField
                                            name="Date_of_Birth"
                                            value={editUserData.Date_of_Birth}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        user.Date_of_Birth
                                    )}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center' }} >
                                    {editMode === user.id ? (
                                        <>
                                            <Button
                                                variant="contained"
                                                startIcon={<EditIcon sx={{ marginLeft: '0px', marginRight: '-2px' }} />}
                                                sx={{ height: '38px' }}
                                                disableRipple
                                                size='small'
                                                onClick={() => handleEditSubmit(user.id)}>Save</Button>
                                            <Button
                                                variant="contained"
                                                disableRipple
                                                size='small'
                                                startIcon={<DeleteIcon sx={{ marginLeft: '0px', marginRight: '-2px' }} />}
                                                sx={{ marginTop: '10px', height: '38px' }}
                                                onClick={() => setEditMode(null)}>Cancel</Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                variant="contained"
                                                startIcon={<EditIcon sx={{ marginLeft: '0px', marginRight: '-2px' }} />}
                                                sx={{ height: '38px' }}
                                                disableRipple
                                                size='small'
                                                onClick={() => {
                                                    setEditMode(user.id);
                                                    setEditUserData({
                                                        Name: user.Name,
                                                        Email: user.Email,
                                                        Phone_Number: user.Phone_Number,
                                                        Date_of_Birth: user.Date_of_Birth
                                                    });
                                                }}>Edit</Button>
                                            <Button
                                                variant="contained"
                                                disableRipple
                                                size='small'
                                                startIcon={<DeleteIcon sx={{ marginLeft: '0px', marginRight: '-2px' }} />}
                                                sx={{ marginLeft: '10px', height: '38px' }}
                                                onClick={() => onDeleteUser(user.id)}
                                            >Delete</Button>
                                        </>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
