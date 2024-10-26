import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { env } from "../../../env";
import { toast } from "react-toastify";
import { api } from "../../../libs/axios";
import { useEffect, useState } from "react";
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigate, useParams } from "react-router-dom";
import { DescDetail } from "../../../components/DescDetail";
import { AppBarComponent } from "../../../components/AppBar";
import { ArrowBack, Chat, Favorite, Group, VolunteerActivism } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardContent, CardMedia, Divider, Grid2, Skeleton, Typography } from "@mui/material";

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

export default function ProjectDetail() {
    const { id: projectId } = useParams();

    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);
    const [srcImage, setSrcImage] = useState("/bannerProject.png");
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const fetchProjectData = async () => {
            setLoading(true);
            try {
                const projectDetail = await api.get(`/project/one/${projectId}`);

                setProjectData(projectDetail.data);
                setSrcImage(`${env.base_url_api}/${projectDetail.data.imagePath}`)
            } catch {
                toast.error("Error ao carregar os dados do projeto");
            } finally {
                setLoading(false)
            }
        };

        fetchProjectData();

        return () => new AbortController().abort();
    }, [projectId]);

    return (
        <Box flexGrow={1}>
            <AppBarComponent color="black" />

            <Box sx={{ padding: '0 7rem', mt: '2rem' }}>
                {
                    isLoading ? (
                        <Grid2 container spacing={4}>
                            <Grid2 size={8}>
                                <Skeleton
                                    animation='wave'
                                    height={350}
                                />
                            </Grid2>
                            <Grid2 size={4}>
                                <Skeleton
                                    animation='wave'
                                    height={350}
                                />
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

                            <Grid2 size={8}>
                                <Card variant="outlined">
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
                                        <Typography
                                            sx={{
                                                mt: '.4rem',
                                                mb: '.6rem',
                                                fontWeight: 700,
                                                fontSize: '1.5rem'
                                            }}
                                        >
                                            {projectData.name}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: '#a5a5a5',
                                                fontWeight: 500,
                                                mb: '.5rem'
                                            }}
                                        >
                                            Criado {dayjs(projectData.createdAt).fromNow()}
                                        </Typography>

                                        <Divider />

                                        <Typography
                                            sx={{
                                                my: '1rem'
                                            }}
                                        >
                                            {projectData.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid2>

                            <Grid2 size={4}>
                                <Card
                                    variant="outlined"
                                >
                                    <CardContent>

                                        <DescDetail
                                            label="Publicado Por"
                                            data={
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        height: '100%',
                                                        gap: '1rem'
                                                    }}
                                                >
                                                    <Avatar
                                                        src={`${env.base_url_api}/${projectData.Ong.imagePath}`}
                                                        alt={projectData.name}
                                                    />

                                                    <Typography>
                                                        {projectData.Ong.name}
                                                    </Typography>

                                                    <Typography>
                                                        {dayjs(projectData.createdAt).format('DD/MM/YYYY')}
                                                    </Typography>
                                                </Box>
                                            }
                                        />

                                        <DescDetail
                                            label="N° de curtidas"
                                            icon={<Favorite color="error" />}
                                            data={projectData._count?.like}
                                        />

                                        <DescDetail
                                            label="N° de Doações"
                                            icon={<VolunteerActivism color="success" />}
                                            data={projectData._count?.Donate}
                                        />

                                        <DescDetail
                                            label="N° de feedbacks"
                                            icon={<Chat />}
                                            data={projectData._count?.Feedback}
                                        />

                                        <DescDetail
                                            label="Vizualizaçoes"
                                            icon={<Group />}
                                            data={projectData._count?.View}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid2>
                        </Grid2>
                    ) : (
                        <Typography>
                            Nenhum conteudo encontrado
                        </Typography>
                    )
                }
            </Box>
        </Box>
    )
}