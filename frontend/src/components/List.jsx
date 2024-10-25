import {Box, Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {deleteTask, getAllTasks} from "../Client.js";
import {useNavigate} from "react-router-dom";

const List = () => {

    const [tasks, setTasks] = useState([])

    const listAllTasks = async () => {
        getAllTasks()
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        listAllTasks();
    }, []);

    const navigator = useNavigate();

    const addNewTask = () => {
        navigator("/add-task")
    };

    const removeTask = (id) => {
        deleteTask(id)
            .then(() => {
                listAllTasks();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const viewDetails = (id) => {
        navigator(`/edit-task/${id}`)
    };

    return (
        <div>
            <Box>
                {/* Title and Button Box */}
                <Box>
                    <Typography variant="h4" className="title">Tasks List</Typography>
                    <Button onClick={addNewTask}>Add Task</Button>
                </Box>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Task Completion</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasks.map((task) => (
                                <TableRow key={task.id} className="table-row">
                                    <TableCell>
                                        <Checkbox checked={task.taskComplete} />
                                    </TableCell>
                                    <TableCell>{task.description}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => viewDetails(task.id)}>Edit</Button>
                                        <Button onClick={() => {removeTask(task.id)}}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
};

export default List;