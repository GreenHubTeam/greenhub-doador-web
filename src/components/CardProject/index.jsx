import { env } from '../../env';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, CardContent, Card, CardMedia, Paper, CardActionArea, Avatar, useMediaQuery, useTheme } from '@mui/material';

export function CardProject(data) {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width: 768px)'); 
    const [srcImage, setSrcImage] = useState(`${env.api_url}/${data.imagePath}`);

    const getRandomProfileImage = () => {
        const profileImages = [
            "/profile1.png",
            "/profile2.png",
            "/profile3.png",
            "/profile4.png",
            "/profile5.png",
            "/profile6.png"
        ];
        const randomIndex = Math.floor(Math.random() * profileImages.length);
        return profileImages[randomIndex];
    };

    // eslint-disable-next-line react/prop-types
    const CustomAvatar = ({ imagePath, name }) => {
        const [avatarSrc, setAvatarSrc] = useState(`${env.api_url}/${imagePath}`);

        return (
            <Avatar
                src={avatarSrc}
                alt={name}
                onError={() => setAvatarSrc(getRandomProfileImage())}
                sx={{
                    cursor: 'pointer',
                    width: isMobile ? 40 : 56, 
                    height: isMobile ? 40 : 56,
                }}
            />
        );
    };

    return (
        <Paper
            variant="outlined"
            sx={{
                margin: isMobile ? '0.5rem' : '1rem',
                padding: isMobile ? '0.5rem' : '1rem',
            }}
        >
            <Card elevation={0}>
                <CardActionArea onClick={() => navigate(`/project/${data.id}`)}>
                    <CardMedia
                        component="img"
                        alt="Project Image"
                        sx={{
                            height: isMobile ? 150 : 200,
                            objectFit: 'cover',
                        }}
                        image={srcImage}
                        title="Project Image"
                        onError={() => {
                            setSrcImage('/bannerProject.png');
                        }}
                    />

                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: isMobile ? '0.5rem' : '1rem',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: '700',
                                    fontSize: isMobile ? '1rem' : '1.35rem', 
                                    marginBottom: '.4rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {data.name}
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {stripHtmlTags(data.description)}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                {data.viewProfile && (
                    <CardActionArea onClick={() => navigate(`/ong/${data.ongId}`)}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '100%',
                                gap: isMobile ? '0.5rem' : '1rem', 
                            }}
                        >
                            <CustomAvatar
                                imagePath={data.ongImagePath || ""}
                                name={data.ongName}
                            />

                            <Typography
                                sx={{
                                    fontSize: isMobile ? '0.85rem' : '1rem', 
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {data.ongName}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                )}
            </Card>
        </Paper>
    );
}
