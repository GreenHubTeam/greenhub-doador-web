import { toast } from "react-toastify";
import { api } from "../../libs/axios";
import { useEffect, useState } from "react";
import { CardProject } from "../CardProject";
import { Search } from "@mui/icons-material";
import useSearch from "../../hooks/useSearch";
import { Grid2, InputAdornment, Pagination, Skeleton, TextField } from "@mui/material";

const PAGE_SIZE = 9;

// eslint-disable-next-line react/prop-types
export function ListProjects({ ongId, viewProfile = false }) {
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [projectsData, setProjectsData] = useState(null);

    const { searchFilter, setSearchFilter } = useSearch();

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {

                const url = ongId ? `/project/ong/${ongId}` : "/project/approved"

                const { data } = await api.get(url, {
                    params: {
                        search: searchFilter,
                        page: page,
                        pageSize: PAGE_SIZE,
                        status: "APPROVED"
                    }
                });

                setProjectsData(data.projects);
                setCount(data.count);
            } catch (error) {
                console.log(error);
                toast.error("Error ao buscar os projetos");
            } finally {
                setIsLoading(false);
            }
        }

        fetchProjects();

        return () => new AbortController().abort();
    }, [searchFilter, page, ongId]);

    return (
        <Grid2 container spacing={3} size={12} my={4}>
            <Grid2 size={12}>
                <TextField
                    fullWidth
                    label="Procure pelo Nome do Projeto"
                    sx={{
                        flex: 1,
                        backgroundColor: '#e7e7e7',
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'transparent'
                            },
                            '&:hover fieldset': {
                                borderColor: 'transparent',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'transparent',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'black',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'green',
                        },
                    }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        },
                    }}
                    onChange={(e) => {
                        setSearchFilter(e.target.value);
                    }}
                />
            </Grid2>
            {!projectsData || isLoading ?
                Array.from([1, 2].map((index) => (
                    <Grid2 key={index} size={6}>
                        <Skeleton height={300} variant="rounded" animation='wave' />
                    </Grid2>
                )))
                : projectsData?.map((project, index) => (
                    <Grid2 key={index} size={{
                        xs: 12,
                        sm: 6
                    }}>
                        <CardProject
                            name={project.name}
                            description={project.description}
                            id={project.id}
                            imagePath={project.imagePath}
                            status={project.status}
                            ongName={project.Ong?.name}
                            ongId={project.Ong?.id}
                            ongImagePath={project.Ong?.imagePath}
                            viewProfile={viewProfile}
                        />
                    </Grid2>
                ))
            }

            {projectsData && !isLoading && (
                <Grid2 container size={12} alignItems='center' justifyContent='center'>
                    <Pagination
                        count={Math.ceil(count / PAGE_SIZE)}
                        page={page}
                        onChange={(_, value) => {
                            setPage(value);
                        }}
                        color="primary"
                        sx={{ marginTop: '20px', mb: '2rem' }}
                    />
                </Grid2>
            )}
        </Grid2>
    )
}