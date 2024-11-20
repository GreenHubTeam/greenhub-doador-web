import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { env } from "../../../env";
import { toast } from "react-toastify";
import { api } from "../../../libs/axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigate, useParams } from "react-router-dom";
import { DescDetail } from "../../../components/DescDetail";
import { AppBarComponent } from "../../../components/AppBar";
import { DonationButton } from "../../../components/DonateButton";
import { ButtonLikeComponent } from "../../../components/ButtonLike";
import { ArrowBack, Group, VolunteerActivism } from "@mui/icons-material";
import { CreateFeedbackComponent } from "../../../components/CreateFeedback";
import { Avatar, Box, Button, Card, CardContent, CardMedia, Divider, Grid2, Skeleton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ButtonLikeComponent } from "../../../components/ButtonLike";

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

export default function ProjectDetail() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { id: projectId } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [projectData, setProjectData] = useState(null);
    const [srcImage, setSrcImage] = useState("/bannerProject.png");

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        const fetchProjectData = async () => {
            setLoading(true);
            try {
                const projectDetail = await api.get(`/project/one/${projectId}`, { params: { userId: user?.id } });
                setProjectData(projectDetail.data);
                setSrcImage(`${env.api_url}/${projectDetail.data.imagePath}`);
            } catch {
                toast.error("Error ao carregar os dados do projeto");
            } finally {
                setLoading(false);
            }
        };

        fetchProjectData();
        window.scrollTo(0, 0);

        return () => new AbortController().abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box flexGrow={1}>
            {!user && <AppBarComponent color="black" />}

            <Box sx={{ padding: isMobile ? '0 1rem' : '0 7rem', mt: '2rem', minHeight: '100dvh' }}>
                {
                    isLoading ? (
                        <Grid2 container spacing={4}>
                            <Grid2 size={8}>
                                <Skeleton animation='wave' height={350} />
                            </Grid2>
                            <Grid2 size={4}>
                                <Skeleton animation='wave' height={350} />
                            </Grid2>
                        </Grid2>
                    ) : projectData ? (
                        <Grid2 container spacing={4}>
                            <Grid2 size={12}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        border: '1px solid gray',
                                        color: 'black',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}
                                    onClick={() => navigate('/project')}
                                >
                                    <ArrowBack /> Voltar
                                </Button>
                            </Grid2>

                            <Grid2 size={{xs: 12, md: 8}}>
                                <Card variant="outlined">
                                    <CardMedia
                                        component='img'
                                        alt='Project Image'
                                        sx={{ height: isMobile ? 150 : 200 }}
                                        image={srcImage}
                                        title='Project Image'
                                        onError={() => setSrcImage('/bannerProject.png')}
                                    />
                                    <CardContent>
                                        <Stack direction={isMobile ? 'column' : 'row'} justifyContent='space-between'>
                                            <Typography sx={{ fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                                                {projectData.name}
                                            </Typography>
                                            {user && <ButtonLikeComponent projectId={projectId} />}
                                        </Stack>

                                        <Typography sx={{ color: '#a5a5a5', fontWeight: 500, mt: '.6rem', mb: '.5rem' }}>
                                            Criado {dayjs(projectData.createdAt).fromNow()}
                                        </Typography>

                                        <Divider />

                                        <Typography
                                            sx={{
                                                my: '2rem'
                                            }}
                                        >
                                            {projectData.description}
                                        </Typography>

                                        <Divider />

                                        <Stack direction='column' spacing={2} mt={4}>
                                            <CreateFeedbackComponent projectId={projectId} />
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid2>

                            <Grid2 size={{xs: 12, md: 4}}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <DescDetail
                                            label="Publicado Por"
                                            data={
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    <Avatar
                                                        src={`${env.api_url}/${projectData.Ong.imagePath}`}
                                                        alt={projectData.Ong.name}
                                                    />
                                                    <Typography>{projectData.Ong.name}</Typography>
                                                    <Typography>{dayjs(projectData.createdAt).format('DD/MM/YYYY')}</Typography>
                                                </Box>
                                            }
                                        />

                                        <DescDetail
                                            label="N° de Doações"
                                            icon={<VolunteerActivism color="success" />}
                                            data={projectData._count?.Donate}
                                        />

                                        <DescDetail
                                            label="Vizualizaçoes"
                                            icon={<Group />}
                                            data={projectData._count?.View}
                                        />

                                        {user && <DonationButton projectId={projectId} />}
                                    </CardContent>
                                </Card>
                            </Grid2>
                        </Grid2>
                    ) : (
                        <Typography>Nenhum conteúdo encontrado</Typography>
                    )
                }
            </Box>
        </Box>
    );
}
