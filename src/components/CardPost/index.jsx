/* eslint-disable react/prop-types */
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useState } from 'react';
import { env } from '../../env/index';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Avatar, Box, Card, CardContent, CardMedia, Grid2, Stack, Typography, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

export function CardPost({
    description,
    ongName,
    profilePath,
    createdAt,
    postImagePath,
    profilePagePathImage = null,
    ongId
}) {
    const [postSrc, setPostSrc] = useState(postImagePath ? `${env.base_url_api}/${postImagePath}` : "/profile1.png");

    const getRandomProfileImage = () => {
        if (profilePagePathImage) {
            return profilePagePathImage
        }

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

    const navigate = useNavigate();

    const CustomAvatar = ({ imagePath, name, id }) => {
        const [avatarSrc, setAvatarSrc] = useState(`${env.base_url_api}/${imagePath}`);

        return (
            <Avatar
                src={avatarSrc}
                alt={name}
                onError={() => setAvatarSrc(getRandomProfileImage())}
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                    navigate(`/ong/${id}`)
                }}
            />
        );
    };

    return (
        <Card variant='outlined'>
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1.5rem',
                        flexDirection: 'column',
                    }}
                >
                    <Grid2 container alignItems='center' justifyContent='space-between'>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                        >
                            <CustomAvatar imagePath={profilePath || ""} name={ongName} id={ongId} />

                            <Stack >
                                <Typography variant='h6'>
                                    {ongName}
                                </Typography>
                                <Typography variant="body2" color='textSecondary'>
                                    Publicado {dayjs(createdAt).fromNow()}
                                </Typography>
                            </Stack>


                        </Box>
                    </Grid2>


                    <Typography>
                        {description}
                    </Typography>
                </Box>
            </CardContent>
            {postImagePath && (
                <CardMedia
                    component='img'
                    alt='Project Image'
                    sx={{ height: 200 }}
                    image={postSrc}
                    title='Project Image'
                    onError={() => {
                        setPostSrc('/bannerProject.png')
                    }}
                />
            )}
        </Card>
    )
}