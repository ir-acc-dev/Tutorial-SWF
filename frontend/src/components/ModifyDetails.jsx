import {useEffect, useState} from 'react';
import { Container, Typography, Box, TextField, Button} from '@mui/material';
import {useNavigate, useParams} from "react-router-dom";
import {createTask, getTaskById, updateTask} from "../Client.js";

const ModifyDetails = () => {

    const [description, setDescription] = useState('');
    const taskComplete = false;
    const navigator = useNavigate();

    const {id} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {description, taskComplete};

        if(id) {
            updateTask(newTask, id).then((response) => {
                console.log(response.data)
                navigator("/tasks")
            }).catch((error) => {
                console.error(error)
            })
        } else {
            createTask(newTask)
                .then((response) => {
                    console.log(response.data);
                    navigator("/tasks");
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    useEffect(() => {
        if(id) {
            getTaskById(id).then((response) => {
                setDescription(response.data.description);
            }).catch((error) => {
                console.error(error)
            })
        }
    }, [id]);

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
