import { toast } from "react-toastify";
import { api } from "../../libs/axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { IconButton, Tooltip } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
export function ButtonLikeComponent({ projectId }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth();

    const createLike = async () => {
        setIsLoading(true);
        try {
            const { data } = await api.post(`/project/like/${projectId}/${user?.id}`);

            setIsFavorite(data?.message === 'Curtido' ? true : false);
        } catch {
            toast.error(`Erro ao ${isFavorite ? "Descurtir" : "Curtir"} esse projeto`);
            setIsFavorite(false);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const fetchLike = async () => {
            setIsLoading(true);
            try {
                const { data } = await api.post(`/project/getlike/${projectId}/${user?.id}`);

                setIsFavorite(data?.message === 'Curtido' ? true : false);
            } catch {
                toast.error(`Erro ao ${isFavorite ? "Descurtir" : "Curtir"} esse projeto`);
                setIsFavorite(false);
            } finally {
                setIsLoading(false);
            }
        }

        fetchLike();

        return () => new AbortController().abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <IconButton onClick={() => createLike()} disabled={isLoading}>
            <Tooltip title={isFavorite ? "Descurtir" : "Curtir"}>
                {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
            </Tooltip>
        </IconButton>
    )
}