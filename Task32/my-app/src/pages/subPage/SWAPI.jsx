import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../swapi/dataThunk.js';
import { clearData } from '../../swapi/starWarsSlice.js';
import {
    Box,
    Button,
    CircularProgress,
    Paper,
    Typography,
    Alert,
    Divider,
    useTheme,
    AppBar,
    Toolbar,
    TextField,
    Container
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import LinkIcon from '@mui/icons-material/Link';
import ClearIcon from '@mui/icons-material/Clear';

const Swapi = ({ theme = 'light' }) => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('people/1/');
    const { data, loading, error } = useSelector(state => state.swapi);
    const muiTheme = useTheme();

    useEffect(() => {
        dispatch(fetchUsers(searchQuery));
    }, [dispatch, searchQuery]);

    const handleRefresh = () => {
        dispatch(fetchUsers(searchQuery));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchUsers(searchQuery));
    };

    const handleClear = () => {
        dispatch(clearData());
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Star Wars API
                    </Typography>
                    <Button
                        color="inherit"
                        href="https://swapi.dev/"
                        target="_blank"
                        rel="noopener"
                        startIcon={<LinkIcon />}
                    >
                        swapi.dev
                    </Button>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md" sx={{ py: 4, flex: 1 }}>
                <Paper
                    component="form"
                    onSubmit={handleSearch}
                    elevation={3}
                    sx={{
                        p: 3,
                        mb: 3,
                        bgcolor: theme === 'dark' ? muiTheme.palette.grey[800] : 'background.paper',
                    }}
                >
                    <Box display="flex" gap={2} alignItems="center">
                        <TextField
                            fullWidth
                            variant="outlined"
                            size="small"
                            name="query"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="people/1/"
                            label="API Endpoint"
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={loading}
                            sx={{
                                height: '40px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Get Info
                        </Button>
                    </Box>
                </Paper>

                <Paper
                    elevation={3}
                    sx={{
                        p: 3,
                        bgcolor: theme === 'dark' ? muiTheme.palette.grey[800] : 'background.paper',
                        color: theme === 'dark' ? 'common.white' : 'text.primary'
                    }}
                >
                    <Box display="flex" flexDirection="column" gap={3}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="h5" component="h2">
                                API Response
                            </Typography>
                            <Box display="flex" gap={1}>
                                <Button
                                    variant="outlined"
                                    onClick={handleRefresh}
                                    disabled={loading}
                                    startIcon={<RefreshIcon />}
                                >
                                    Refresh
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={handleClear}
                                    disabled={!data}
                                    startIcon={<ClearIcon />}
                                >
                                    Clear
                                </Button>
                            </Box>
                        </Box>

                        {loading && (
                            <Box display="flex" justifyContent="center" py={4}>
                                <CircularProgress />
                            </Box>
                        )}

                        {error && (
                            <Alert severity="error" sx={{ mt: 2 }}>
                                Error: {error}
                            </Alert>
                        )}

                        {data && (
                            <Box sx={{ mt: 2 }}>
                                <Divider sx={{ my: 2 }} />
                                <Typography variant="h6" gutterBottom>
                                    Character Details:
                                </Typography>
                                <Paper
                                    variant="outlined"
                                    sx={{
                                        p: 2,
                                        bgcolor: theme === 'dark' ? muiTheme.palette.grey[900] : 'grey.100',
                                        overflow: 'auto',
                                        maxHeight: 400
                                    }}
                                >
                  <pre style={{ margin: 0 }}>
                    {JSON.stringify(data, null, 2)}
                  </pre>
                                </Paper>
                            </Box>
                        )}
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Swapi;