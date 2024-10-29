import { env } from "../../env";
import { toast } from "react-toastify";
import { api } from "../../libs/axios";
import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Visibility } from "@mui/icons-material";
import { Card, CardActionArea, CardContent, CardMedia, Grid2, Skeleton, Stack, Typography } from "@mui/material";

export function ListLatestProjects() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [lastestData, setLatestData] = useState(null);

    useEffect(() => {
        const fetchlatestViewProjects = async () => {
            setIsLoading(true);
            try {
                const { data } = await api.get(`/project/viewLatest/${user.id}`);

                setLatestData(data);
            } catch {
                toast.error("Error ao buscar os ultimos projetos vizualizados");
            } finally {
                setIsLoading(false)
            }
        }

        fetchlatestViewProjects();

        return () => new AbortController().abort();
    }, [user.id])

    const CardMediaCustom = (imagePath) => {
        const [srcImage, setSrcImage] = useState(`${env.api_url}/${imagePath}`)

        return (
            <CardMedia
                component='img'
                src={srcImage}
                onError={() => {
                    setSrcImage('/bannerProject.png')
                }}
                sx={{ height: 50 }}
            />
        )
    }

    return (
        <Grid2 container spacing={2}>
            {
                isLoading && Array.from({ length: 3 }).map((value, index) => (
                    <Grid2 key={index} size={12}>
                        <Skeleton height={100} variant="rounded" animation='wave' />
                    </Grid2>
                ))
            }

            {!isLoading && lastestData && lastestData.map((project, index) => (
                <Grid2 size={12} key={index}>
                    <Card variant="outlined">
                        <CardActionArea onClick={() => navigate(`/project/${project.project.id}`)}>
                            <CardMediaCustom imagePath={project.project.imagePath} />

                            <CardContent>
                                <Stack>
                                    <Typography noWrap>
                                        {project.project.name}
                                    </Typography>

                                    <Stack direction='row' alignItems='center' spacing={2}>
                                        <Visibility />
                                        <Typography>
                                            {project.countView}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid2>
            ))
            }

            {
                lastestData && lastestData?.length === 0 && (
                    <Grid2 size={12}>
                        <Typography color="textSecondary">
                            Você ainda não vizualizou nenhum projeto,
                            explore a plataforma...
                        </Typography>
                    </Grid2>
                )
            }
        </Grid2 >
    )
}