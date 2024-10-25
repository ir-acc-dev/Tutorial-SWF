import {Box, Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getAllTasks} from "../Client.js";

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


    return (
        <div>
            <Box>
                {/* Title and Button Box */}
                <Box>
                    <Typography variant="h4" className="title">Travel Entries</Typography>
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
                                        <Button>Edit</Button>
                                        <Button>Delete</Button>
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