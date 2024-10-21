import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Box, Typography } from '@mui/material';

export function SlideText() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ pauseOnMouseEnter: true, delay: 5000 }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <Box
                    sx={{
                        height: '200px',
                        color: 'white'
                    }}
                >
                    <Typography variant='h4' textAlign='center' fontWeight={700}>
                        Apoie o Futuro Verde
                    </Typography>

                    <Typography variant='subtitle1' textAlign='center' fontWeight={600} color='#bfbfbf'>
                        Doe para projetos que promovem a sustentabilidade e protegem o meio ambiente.
                    </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box
                    sx={{
                        height: '200px',
                        color: 'white'
                    }}
                >
                    <Typography variant='h4' textAlign='center' fontWeight={700}>
                        Conexão com ONGs
                    </Typography>

                    <Typography variant='subtitle1' textAlign='center' fontWeight={600} color='#bfbfbf'>
                        Facilitamos o encontro entre doadores e ONGs que atuam pelo planeta.
                    </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box
                    sx={{
                        height: '200px',
                        color: 'white'
                    }}
                >
                    <Typography variant='h4' textAlign='center' fontWeight={700}>
                        Juntos na COP30
                    </Typography>

                    <Typography variant='subtitle1' textAlign='center' fontWeight={600} color='#bfbfbf'>
                        Contribua para metas sustentáveis e faça parte de uma mudança global.
                    </Typography>
                </Box>
            </SwiperSlide>
        </Swiper>
    );
};