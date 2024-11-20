import { env } from "../../env";
import { toast } from "react-toastify";
import { api } from "../../libs/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Card, CardActionArea, CardContent, Grid2, Skeleton, Stack, Typography, useMediaQuery } from "@mui/material";

export function ListRandomOngs() {
    const [ongsData, setOngsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    useEffect(() => {
        const fetchRandomOngs = async () => {
            setIsLoading(true);
            try {
                const { data } = await api.get('/ong/random/5');
                setOngsData(data);
            } catch {
                toast.error("Erro ao buscar ONGs");
            } finally {
                setIsLoading(false);
            }
        };

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
            "/profile6.png",
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
                sx={{
                    cursor: "pointer",
                    ...(isMobile && { width: 56, height: 56 }),
                }}
            />
        );
    };

    return (
        <Grid2
            container
            spacing={2}
            sx={{
                display: 'flex',
                overflowX: 'auto',
                flexWrap: {
                    xs: 'nowrap',
                    md: 'wrap'
                },
            }}
        >
            {isLoading &&
                Array.from({ length: 3 }).map((_, index) => (
                    <Grid2
                        key={index}
                        sx={{ flex: '0 0 auto', width: 300 }} // Largura fixa para cada card no overflow
                    >
                        <Skeleton height={100} variant="rounded" animation="wave" />
                    </Grid2>
                ))}

            {ongsData &&
                ongsData.map((ong, index) => (
                    <Grid2
                        key={index}
                        sx={{
                            width: {
                                xs: 100,
                                md: '100%'
                            },
                            flex: '0 0 auto'
                        }}
                    >
                        <Card
                            variant="outlined"
                            sx={{
                                ...(isMobile && { border: 'none' }),
                            }}
                        >
                            <CardActionArea
                                onClick={() => {
                                    navigate(`/ong/${ong.id}`);
                                }}
                            >
                                <CardContent>
                                    <Stack
                                        direction={{ xs: 'column', md: 'row' }}
                                        spacing={{ xs: 1, md: 2 }}
                                        alignItems='center'
                                        sx={{ width: '100%' }}
                                    >
                                        <CustomAvatar imagePath={ong.imagePath} name={ong.name} />

                                        <Typography noWrap sx={{ width: '100%', textAlign: 'center' }}>
                                            {ong.name}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid2>
                ))}
        </Grid2>

    );
}
