import dayjs from "dayjs";
import { toast } from "react-toastify";
import { api } from "../../libs/axios";
import { useEffect, useState } from "react";
import { Card, CardActionArea, CardContent, Chip, CircularProgress, Divider, Grid2, Pagination, Stack, Typography } from "@mui/material";

const PAGE_SIZE = 4;
// eslint-disable-next-line react/prop-types
export function DonateHistoryComponent({ userId }) {
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [paginationModel, setPaginationModel] = useState({
        count: 1,
        page: 1
    });
    const [isGeneratingLink, setIsGeneratingLink] = useState(false);

    useEffect(() => {
        const fecthHistoryDonate = async () => {
            setIsLoading(true);
            try {
                const { data } = await api.get(`/donation/${userId}`, {
                    params: {
                        page: paginationModel.page,
                        pageSize: PAGE_SIZE
                    }
                });

                setHistory(data.donate);
                setPaginationModel(prev => ({
                    ...prev,
                    count: data.count
                }));
            } catch {
                toast.error("Error ao Carregar historicos de doações");
            } finally {
                setIsLoading(false);
            }
        }

        fecthHistoryDonate();

        return () => new AbortController().abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginationModel.page]);

    const fetchLinkCheckout = async (donateId) => {
        setIsGeneratingLink(true);
        try {
            const { data } = await api.get(`/donation/restart/${donateId}`);

            const { url } = data;

            if (!url) {
                return toast.warning("Error ao gerar o link, se você já concluiu o pagamento, entre novamente mais tarde")
            }

            window.location.href = url;
        } catch {
            toast.error("Error ao gerar o link de pagamento");
        } finally {
            setIsGeneratingLink(false);
        }
    }

    return (
        <Card variant="outlined">
            <CardContent>
                {isLoading && (
                    <Stack direction='row' alignItems='center' justifyContent='center'>
                        <CircularProgress color="success" />
                    </Stack>
                )}

                {!isLoading && history.length > 0 && (
                    <>
                        <Typography variant="subtitle1" color="success" mb='1rem'>
                            Historico de doações
                        </Typography>

                        <Grid2 container spacing={2}>
                            {history.map((donate, index) => (
                                <Grid2 size={12} key={index}>
                                    <Card variant="outlined">
                                        <CardActionArea disabled={isGeneratingLink} onClick={() => {
                                            if (donate.status === 'PAID') return

                                            fetchLinkCheckout(donate.id);
                                        }}>
                                            <CardContent>
                                                <Stack direction='row' justifyContent='space-between'>
                                                    <Typography noWrap>
                                                        {donate.project.name}
                                                    </Typography>

                                                    <Chip
                                                        label={donate.status === 'PENDING' ? "PENDENTE" : "PAGO"}
                                                        color={donate.status === 'PENDING' ? "warning" : "success"}
                                                    />
                                                </Stack>

                                                <Divider sx={{ my: '1rem' }} />

                                                <Typography>
                                                    Doação: R$ {donate.value}
                                                </Typography>

                                                {donate.paymentDate && (
                                                    <Typography>
                                                        Data do Pagamento {dayjs(donate.paymentDate).format("DD/MM/YYYY")}
                                                    </Typography>
                                                )}
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid2>
                            ))}
                        </Grid2>
                    </>
                )}

                {!isLoading && history.length === 0 && (
                    <Typography variant="subtitle1">
                        Nenhuma doação encontrada
                    </Typography>
                )}

                <Stack direction='row' justifyContent='center'>
                    <Pagination
                        disabled={isLoading || isGeneratingLink}
                        count={Math.ceil(paginationModel.count / PAGE_SIZE)}
                        page={paginationModel.page}
                        onChange={(e, value) => {
                            setPaginationModel(prev => {
                                return {
                                    ...prev,
                                    page: value
                                }
                            })
                        }}
                        color="primary"
                        sx={{ marginTop: '20px', mb: '2rem' }}
                    />
                </Stack>
            </CardContent>
        </Card>
    )
}