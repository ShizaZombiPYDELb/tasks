import { Link } from "react-router-dom";
import { Box, Typography, Button, Container } from '@mui/material';
import { Home } from '@mui/icons-material';

const NotFound = () => {
    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'text.secondary' }}>
                    404
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Страница не найдена
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Извините, запрашиваемая страница не существует.
                </Typography>
            </Box>

            <Button
                component={Link}
                to="/"
                variant="contained"
                size="large"
                startIcon={<Home />}
                sx={{
                    borderRadius: 8,
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1.1rem'
                }}
            >
                На главную
            </Button>
        </Container>
    );
}

export default NotFound;