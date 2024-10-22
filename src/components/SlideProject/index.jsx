import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const projects = [
    {
        title: "Projeto 1",
        description: "Descrição do Projeto 1.",
        imagePath: "/fotoonça.png"
    },
    {
        title: "Projeto 2",
        description: "Descrição do Projeto 2.",
        imagePath: "/fotoonça.png"
    },
    {
        title: "Projeto 3",
        description: "Descrição do Projeto 3.",
        imagePath: "/fotoonça.png"
    },
    {
        title: "Projeto 4",
        description: "Descrição do Projeto 4.",
        imagePath: "/fotoonça.png"
    },
];

export function SlideProject() {
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
            slidesPerView={2}
        >
            {
                projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <Card sx={{ mx: 'auto' }}>
                            <CardMedia component='img' src={project.imagePath} />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};