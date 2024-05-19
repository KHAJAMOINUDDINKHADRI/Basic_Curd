import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { Button, CardContent, Typography, CardActions } from '@mui/material';
import './style_table.css'


const AddUserForm = ({ onAddUser }) => {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone_Number, setPhone_Number] = useState('');
    const [Date_of_Birth, setDate_of_Birth] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddUser({ Name, Email, Phone_Number, Date_of_Birth });
        setName('');
        setEmail('');
        setPhone_Number('');
        setDate_of_Birth('');
    }

    return (
        <Card sx={{ maxWidth: 1100, height: '200px', margin: '0 auto', marginBlock: 8, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
                    Add New User
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: 'center'
                }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        required
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        required
                        variant="outlined"
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        required
                        type="tel"
                        value={Phone_Number}
                        onChange={(e) => setPhone_Number(e.target.value)}
                    />
                    <TextField
                        label="Date of Birth"
                        required
                        focused
                        variant="outlined"
                        type="date"
                        value={Date_of_Birth}
                        onChange={(e) => setDate_of_Birth(e.target.value)}
                    />
                </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                    Add User
                </Button>
            </CardActions>
        </Card>
    )
};

export default AddUserForm;