import { Outlet, Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Button,
    Container,
    CssBaseline,
    Box,
    Typography,
    useTheme,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Link as MuiLink,
    Divider,
    IconButton
} from '@mui/material';
import {
    Email,
    GitHub,
    LocationOn,
    Phone,
    Home,
    Checklist,
    Api
} from "@mui/icons-material";
import React from "react";

const Layout = () => {
    const theme = useTheme();

    const navItems = [
        { path: "/", label: "Home", icon: <Home /> },
        { path: "/todo", label: "TODO", icon: <Checklist /> },
        { path: "/swapi", label: "SWAPI", icon: <Api /> }
    ];

    const contactItems = [
        { icon: <Email />, text: "zverev.leonid2005@gmail.com" },
        { icon: <Phone />, text: "+380-66-982-1176" },
        { icon: <LocationOn />, text: "80a Timiryazeva St, Odesa" }
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Leonid Zverev
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.path}
                                color="inherit"
                                component={Link}
                                to={item.path}
                                startIcon={item.icon}
                                sx={{ mr: 1 }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Container
                maxWidth="lg"
                sx={{
                    py: 4,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box component="main" sx={{ flex: 1 }}>
                    <Outlet />
                </Box>
            </Container>

            <Box
                component="footer"
                sx={{
                    py: 3,
                    backgroundColor: theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 3
                    }}>
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Contact Information
                            </Typography>
                            <List dense>
                                {contactItems.map((item, index) => (
                                    <ListItem key={index} disableGutters>
                                        <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                            <Typography variant="h6" gutterBottom>
                                Connect With Me
                            </Typography>
                            <IconButton
                                component={MuiLink}
                                href="https://github.com/ShizaZombiPYDELb"
                                target="_blank"
                                rel="noopener"
                                color="inherit"
                                size="large"
                            >
                                <GitHub fontSize="large" />
                            </IconButton>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2" color="text.secondary" align="center">
                        © {new Date().getFullYear()} Leonid Zverev - All Rights Reserved
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export { Layout };