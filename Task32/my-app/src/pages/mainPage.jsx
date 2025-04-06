import React from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Avatar,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {
    School,
    Language,
    Psychology
} from '@mui/icons-material';

const Home = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                        sx={{
                            width: 100,
                            height: 100,
                            mr: 3,
                            fontSize: '2.5rem',
                            bgcolor: 'primary.main'
                        }}
                    >
                        LZ
                    </Avatar>
                    <Box>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Leonid Zverev
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            Front-End Developer | Cybersecurity
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        About Me
                    </Typography>
                    <Typography>
                        I'm extremely curious and passionate about programming. Improving applications and exploring new technologies keeps me engaged and excited.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Education
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon><School /></ListItemIcon>
                            <ListItemText
                                primary="National University 'Odesa Polytechnic'"
                                secondary="Cybersecurity, 2022 - Present"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><School /></ListItemIcon>
                            <ListItemText
                                primary="Odesa Lyceum 'Fontansky'"
                                secondary="Complete Secondary Education, 2011 - 2022"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><School /></ListItemIcon>
                            <ListItemText
                                primary="Hillel IT School (Front-end Pro)"
                                secondary="2024 - Present"
                            />
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Skills
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom>
                        Programming Languages:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {['JavaScript', 'Python', 'SQL'].map(lang => (
                            <Chip key={lang} label={lang} color="primary" />
                        ))}
                    </Box>

                    <Typography variant="subtitle1" gutterBottom>
                        Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {['HTML', 'CSS', 'React (40%)', 'Node.js', 'Webpack', 'MongoDB'].map(tech => (
                            <Chip key={tech} label={tech} color="secondary" />
                        ))}
                    </Box>

                    <Typography variant="subtitle1" gutterBottom>
                        Other:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {['Cybersecurity Basics', 'Responsive Design', 'API Integration', 'GIT'].map(skill => (
                            <Chip key={skill} label={skill} />
                        ))}
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Languages
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon><Language /></ListItemIcon>
                            <ListItemText primary="Ukrainian (Native)" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Language /></ListItemIcon>
                            <ListItemText primary="English (B1)" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Language /></ListItemIcon>
                            <ListItemText primary="Russian (B2)" />
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Personal Qualities
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {['Curiosity', 'Creativity', 'Optimism', 'Critical Thinking'].map(quality => (
                            <Chip
                                key={quality}
                                label={quality}
                                icon={<Psychology fontSize="small" />}
                            />
                        ))}
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Home;