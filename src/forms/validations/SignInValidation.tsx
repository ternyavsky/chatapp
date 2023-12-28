import { z } from "zod";

export const formSchema = z.object({
    username: z.string().min(2, "Ник не может быть короче 2 символов").max(50),
    password: z.string().min(2, "Пароль не может быть короче 2 символов").max(50)
})
