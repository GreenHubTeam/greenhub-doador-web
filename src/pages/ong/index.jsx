import dayjs from "dayjs";
import { env } from "../../env";
import { api } from "../../libs/axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatCNPJ } from "../../utils/formatCNPJ";
import { ListPost } from "../../components/ListPosts";
import { AppBarComponent } from "../../components/AppBar";
import { ListProjects } from "../../components/ListProjects";
import { AccessTime, AssignmentInd, Email, Info, LocationCity, Phone } from "@mui/icons-material";
import { Avatar, Box, Card, CardContent, Chip, Grid2, Stack, Tab, Tabs, Typography } from "@mui/material";

function CustomTabPanel(props) {
    // eslint-disable-next-line react/prop-types
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function OngProfileComponent() {
    const { id: ongId } = useParams();
    const [ongData, setOngData] = useState(null);
    const [profileImage, setProfileImage] = useState("/profile1.png");

    const randomizeProfileImage = () => {
        const profileImages = [
            "/profile1.png",
            "/profile2.png",
            "/profile3.png",
            "/profile4.png",
            "/profile5.png",
            "/profile6.png",
        ];

        const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];

        setProfileImage(randomImage);
    };

    useEffect(() => {
        const fetchOngData = async () => {
            try {
                const response = await api.get(`/ong/${ongId}`);

                setOngData(response.data);

                setProfileImage(`${env.base_url_api}/${response.data.imagePath}`)
            } catch {
                toast.error("Error ao buscar dados da ONG, tente Novamente Mais tarde")
            }
        }

        fetchOngData();

        return () => new AbortController().abort();
    }, [ongId]);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid2 container>
            <Grid2 size={12}>
                <AppBarComponent color="black" />
            </Grid2>

            <Grid2 size={12} padding={4}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mb: '2rem'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '300px',
                            position: 'relative',
                        }}
                    >
                        <Box
                            component="img"
                            alt="teste"
                            src="/fundoperfil.jpg"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '2rem',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginTop: '-3.5rem',
                            paddingLeft: '3rem',
                            zIndex: 1,
                        }}
                    >
                        <Avatar
                            src={profileImage}
                            alt="Foto de perfil"
                            onError={() => {
                                randomizeProfileImage();
                            }}
                            sx={{ height: '100px', width: '100px' }}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '.4rem',
                                alignItems: 'start'
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{ color: 'white', fontWeight: '700' }}
                            >
                                {ongData?.name}
                            </Typography>

                            <Chip label="ONG" color="warning" />
                        </Box>
                    </Box>

                    <Grid2 mt={4} container spacing={3}>
                        <Grid2 size={4}>
                            <Card
                                variant="outlined"
                            >
                                <CardContent>
                                    <Typography variant="h6" mb={2}>
                                        Sobre
                                    </Typography>
                                    <Stack spacing={2}>

                                        <Typography
                                            display='flex'
                                            alignItems='center'
                                            gap={1}
                                            fontSize='1.1rem'
                                        >
                                            <AssignmentInd />
                                            {formatCNPJ(ongData?.document || "")}
                                        </Typography>
                                        <Typography
                                            display='flex'
                                            gap={1}
                                            fontSize='1.1rem'
                                        >
                                            <Info />
                                            {ongData?.about}
                                        </Typography>

                                        <Typography
                                            display='flex'
                                            alignItems='center'
                                            gap={1}
                                            fontSize='1.1rem'
                                        >
                                            <Email />
                                            {ongData?.User?.email}
                                        </Typography>
                                        <Typography
                                            display='flex'
                                            alignItems='center'
                                            gap={1}
                                            fontSize='1.1rem'
                                        >
                                            <LocationCity />
                                            {ongData?.state} - {ongData?.city} - {ongData?.district} - {ongData?.street} - {ongData?.number}
                                        </Typography>
                                        <Typography
                                            display='flex'
                                            alignItems='center'
                                            gap={1}
                                            fontSize='1.1rem'
                                        >
                                            <Phone />
                                            {ongData?.telephone}
                                        </Typography>
                                        <Typography
                                            display='flex'
                                            alignItems='center'
                                            gap={1}
                                            fontSize='1.1rem'
                                        >
                                            <AccessTime />
                                            Criado em {dayjs(ongData?.createdAt).format('DD/MM/YYYY')}
                                        </Typography>
                                        <Typography
                                            display='flex'
                                            alignItems='center'
                                            gap={1}
                                            fontSize='1.1rem'
                                        >
                                            <AccessTime />
                                            Atualizado em {dayjs(ongData?.updatedAt).format('DD/MM/YYYY')}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid2>

                        <Grid2 size={8}>
                            <Card variant="outlined">
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label="Projetos" {...a11yProps(0)} />
                                            <Tab label="Posts" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                    <CustomTabPanel value={value} index={0}>
                                        <ListProjects ongId={ongId} />
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={1}>
                                        <ListPost ongId={ongId} profilePath={profileImage} />
                                    </CustomTabPanel>
                                </Box>
                            </Card>
                        </Grid2>
                    </Grid2>
                </Box >
            </Grid2>
        </Grid2>
    )
}