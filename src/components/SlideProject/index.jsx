import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { env } from '../../env/index';
import { api } from '../../libs/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
};

export function SlideProject() {
    const [projectsData, setProjectsData] = useState(null);
    const navigate = useNavigate();
    const theme = useTheme();

    const isMobile = useMediaQuery('(max-width: 768px)'); 

    useEffect(() => {
        const fetchProjects = async () => {
            const { data } = await api.get('/project/highlights');
            setProjectsData(data);
        };

        fetchProjects();

        return () => new AbortController().abort();
    }, []);

    const MediaComponentCustomize = (imagePath) => {
        const [imageURL, setImageURL] = useState(`${env.api_url}/${imagePath.imagePath}`);

        return (
            <CardMedia
                component='img'
                sx={{ height: 200 }}
                src={imageURL}
                onError={() => {
                    setImageURL("/bannerProject.png")
                }}
            />
        )
    };

    return (
        <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect='coverflow'
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{ delay: 4000 }}
            grabCursor={true}
            centeredSlides={true}
            style={{ padding: '20px 0' }}
            loop
            slidesPerView={isMobile ? 1 : 2} 
        >
            {
                projectsData?.map((project, index) => (
                    <SwiperSlide key={index}>
                        <Card sx={{ mx: 'auto' }}>
                            <CardActionArea onClick={() => navigate(`/project/${project.id}`)}>
                                <MediaComponentCustomize imagePath={project.imagePath} />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" noWrap>
                                        {project.description}
                                    </Typography>

                                    <Stack direction='row' spacing={1} alignItems='center'>
                                        <Favorite color='error' />
                                        <Typography>
                                            {project.likes}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};
