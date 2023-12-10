import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
const SignupForm = () => {
    const formSchema = z.object({
        username: z.string().min(2, "Ник не может быть короче 2 символов").max(50),
        password: z.string().min(2, "Пароль не может быть короче 2 символов").max(50),
        password2: z.string().min(2, "Пароль не может быть короче 2 символов").max(50)
    }).refine((data) => data.password === data.password2, {
        message: "Пароли не совпадают",
        path: ["password2"],
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            password2: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }


    return (
        <div className="bg-[#434343] min-h-screen flex flex-col items-center">
            <img src="ISAP.svg" className="pt-10" alt="" width={164} height={78} />
            <div className="min-w-[300px] bg-[#313131]  py-6 mt-10 my-2  rounded-[50px]  md:w-[850px] flex-col flex-center">
                <h1 className="h1-bold text-1xl font-extrabold md:text-2xl">
                    Регистрация
                </h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="gap-5 p-4 h-full flex flex-col font-montserrat m-auto">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="label-style">ник</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Придумайте свой ник" {...field} className="rounded-[50px] w-full" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="label-style">пароль</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Придумайте ваш пароль"{...field} className="rounded-[50px] w-full" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password2"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Повторите ваш пароль"{...field} className="rounded-[50px] w-full" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button variant={"outline"} type="submit" className="rounded-[50px] bg-inherit border-[3px] h1-bold m-auto font-extrabold px-10">Создать аккаунт</Button>
                    </form>
                </Form>

                <Link to={"/sign-in"} className="m-auto">
                    <p className="font-montserrat text-[#A033FF] font-extrabold text-xs">Уже имеете аккаунт?</p>
                </Link>

                <div className="flex-center gap-2 mt-3">
                    <img src="google.svg" alt="" width={30} height={30} />
                    <img src="tg.svg" alt="" width={30} height={30} />
                    <img src="vk.svg" alt="" width={30} height={30} />
                </div>

            </div>

        </div>
    )
}
export default SignupForm