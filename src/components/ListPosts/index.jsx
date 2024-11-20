import { api } from "../../libs/axios";
import { toast } from "react-toastify";
import { CardPost } from "../CardPost";
import { useEffect, useState } from "react";
import { Grid2, Pagination, Skeleton } from "@mui/material";

const PAGE_SIZE = 10;

// eslint-disable-next-line react/prop-types
export function ListPost({ ongId }) {
    const [postData, setPostData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(1);
    const [page, setPage] = useState(1);

    async function fetchPost() {
        setIsLoading(true);
        try {
            const url = ongId ? `/post/ong/${ongId}` : "/post";

            const response = await api.get(url, {
                params: {
                    page,
                    pageSize: PAGE_SIZE,
                },
            });
            setPostData(response.data.posts);
            setCount(response.data.count);
        } catch {
            toast.error("Erro ao buscar os posts");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPost();
    }, [page]);

    return (
        <Grid2
            container
            spacing={2}
        >
            {isLoading &&
                Array.from({ length: PAGE_SIZE }).map((_, index) => (
                    <Grid2 size={12} key={index}>
                        <Skeleton height={180} variant="rounded" animation="wave" />
                    </Grid2>
                ))}

            {!isLoading &&
                postData &&
                postData.length > 0 &&
                postData.map((post, index) => (
                    <Grid2 size={12}
                        key={index}
                    >
                        <CardPost
                            description={post.description}
                            createdAt={post.createdAt}
                            ongName={post.Ong.name}
                            postImagePath={post.imagePath}
                            profilePath={post.Ong.imagePath}
                            profilePagePathImage={null}
                            postId={post.id}
                            fetchPosts={fetchPost}
                            ongId={post.ongId}
                        />
                    </Grid2>
                ))}

            {postData && !isLoading && (
                <Grid2 container size={12} justifyContent="center">
                    <Pagination
                        count={Math.ceil(count / PAGE_SIZE)}
                        page={page}
                        onChange={(_, value) => setPage(value)}
                        color="primary"
                        sx={{
                            marginTop: "20px",
                            marginBottom: "2rem",
                        }}
                    />
                </Grid2>
            )}
        </Grid2>
    );
}
