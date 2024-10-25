import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <Box sx={{ marginBottom: 4 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}> TaskManager </Typography>

                    <Box sx={{ display: 'flex' }}>
                        <Button component={NavLink} to="/" color="inherit"  sx={{ textTransform: 'none' }}> Home </Button>
                        <Button component={NavLink} to="/tasks" color="inherit" sx={{ textTransform: 'none' }}> Tasks </Button>
                    </Box>

                </Toolbar>
            </AppBar>

        </Box>


    );
};

export default Header;