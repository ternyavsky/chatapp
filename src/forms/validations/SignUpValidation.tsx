import { z } from "zod";

export const formSchema = z.object({
    username: z.string().min(2, "Ник не может быть короче 2 символов").max(50),
    password: z.string().min(2, "Пароль не может быть короче 2 символов").max(50),
    password2: z.string().min(2, "Пароль не может быть короче 2 символов").max(50)
}).refine((data) => data.password === data.password2, {
    message: "Пароли не совпадают",
    path: ["password2"],
});