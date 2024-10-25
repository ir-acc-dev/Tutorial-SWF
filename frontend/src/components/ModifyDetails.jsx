import { useState } from 'react';
import { Container, Typography, Box, TextField, Button} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {createTask} from "../Client.js";

const ModifyDetails = () => {

    const [description, setDescription] = useState('');
    const taskComplete = false;
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {description, taskComplete};

        createTask(newTask)
            .then((response) => {
                console.log(response.data);
                navigator("/tasks");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Modify</Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <TextField
                    label="Task Description"
                    placeholder="What is the task?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default ModifyDetails;
