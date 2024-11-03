import { z } from "zod";
import { useState } from "react";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../../libs/axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, CircularProgress, Stack, TextField } from "@mui/material";

const feedbackSchema = z.object({
    feedback: z.string().min(20, "Minimo de 20 caracteres").max(150, "Maximo de 150 Caracteres")
})

// eslint-disable-next-line react/prop-types
export function CreateFeedbackComponent({ projectId }) {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const { register, reset, formState: { errors }, handleSubmit } = useForm({ resolver: zodResolver(feedbackSchema) });

    async function handleCreateFeedBack(data) {
        setIsLoading(true);
        try {
            await api.post(`/feedback/create/${projectId}/${user?.id}`, { message: data.feedback });

            reset();

            toast.success("Feedback enviado");
        } catch (err) {
            if (isAxiosError(err) && err.response.data.message) {
                return toast.error(err.response.data.message);
            }

            toast.error("Error ao enviar o feedback");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(handleCreateFeedBack)}>
            <Stack spacing={2}>
                <TextField
                    id="outlined-multiline-static"
                    label="Deixe um feedback para esse projeto"
                    multiline
                    fullWidth
                    rows={4}
                    {...register("feedback")}
                    error={!!errors.feedback}
                    helperText={!!errors.feedback && errors.feedback?.message}
                />

                <Stack direction='row' justifyContent='end'>
                    <Button
                        variant="contained"
                        disabled={isLoading}
                        sx={{ backgroundColor: 'green' }}
                        type="submit"
                    >
                        {isLoading ? <CircularProgress size={24} color="success" /> : "Enviar Feedback"}
                    </Button>
                </Stack>
            </Stack>
        </form>
    )
}