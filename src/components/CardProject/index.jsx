import { env } from '../../env';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, CardContent, Card, CardMedia, Paper, CardActionArea, Avatar, } from '@mui/material';

export function CardProject(data) {
    const navigate = useNavigate();
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
                sx={{ cursor: 'pointer' }}
            />
        );
    };

    return (
        <Paper variant='outlined'>
            <Card elevation={0}>
                <CardActionArea onClick={() => navigate(`/project/${data.id}`)}>
                    <CardMedia
                        component='img'
                        alt='Project Image'
                        sx={{ height: 200 }}
                        image={srcImage}
                        title='Project Image'
                        onError={() => {
                            setSrcImage('/bannerProject.png')
                        }}
                    />

                    <CardContent>
                        <Box
                            sx={{ display: 'flex', justifyContent: 'space-between', gap: '.5re,' }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: '700',
                                    fontSize: '1.35rem',
                                    marginBottom: '.4rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
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
                            {data.description}
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
                                gap: '1rem'
                            }}
                        >
                            <CustomAvatar imagePath={data.ongImagePath || ""} name={data.ongName} />

                            <Typography
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {data.ongName}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                )
                }
            </Card>
        </Paper >
    )
}