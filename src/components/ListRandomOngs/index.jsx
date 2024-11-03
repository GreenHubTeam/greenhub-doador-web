import { env } from "../../env";
import { toast } from "react-toastify";
import { api } from "../../libs/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Card, CardActionArea, CardContent, Grid2, Skeleton, Stack, Typography } from "@mui/material";

export function ListRandomOngs() {
    const [ongsData, setOngsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchRandomOngs = async () => {
            setIsLoading(true);
            try {
                const { data } = await api.get('/ong/random/5');

                setOngsData(data);
            } catch {
                toast.error("Error ao buscar ongs");
            } finally {
                setIsLoading(false);
            }
        }

        fetchRandomOngs();

        return () => new AbortController().abort();
    }, []);

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

    const navigate = useNavigate();

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
        <Grid2 container spacing={2}>
            {
                isLoading && Array.from({ length: 3 }).map((value, index) => (
                    <Grid2 key={index} size={12}>
                        <Skeleton height={100} variant="rounded" animation='wave' />
                    </Grid2>
                ))
            }

            {ongsData && ongsData.map((ong, index) => (
                <Grid2 key={index} size={12}>
                    <Card variant="outlined">
                        <CardActionArea
                            onClick={() => {
                                navigate(`/ong/${ong.id}`)
                            }}
                        >
                            <CardContent>
                                <Stack direction='row' alignItems='center' spacing={2}>
                                    <CustomAvatar imagePath={ong.imagePath} name={ong.name} />

                                    <Typography noWrap>
                                        {ong.name}
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid2>
            ))}
        </Grid2>
    )
}