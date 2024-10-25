import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const goToTasks = () => {
        navigate('/tasks');
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="90vh"
            padding={4}
        >
            <Typography variant="h2" component="h1" gutterBottom color="primary" fontWeight="bold">
                Task Management Application Framework
            </Typography>

            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                Provides an interactive way to learn CRUD operations—creating, reading, updating, and deleting items.
            </Typography>

            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={goToTasks}
                sx={{ mt: 4 }}
            >
                View Your Tasks
            </Button>
        </Box>
    );
};

export default Home;
