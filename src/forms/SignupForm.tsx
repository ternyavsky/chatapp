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
import { Link, useNavigate } from "react-router-dom";
import { CreateUserAccount, Login, TelegramAuth } from "@/api/auth";
import { useToast } from "@/components/ui/use-toast";
import { INewUser, TgUser } from "@/shared/types/user.interface";
import { TLoginButton, TLoginButtonSize } from "react-telegram-auth";
import { useAuth } from "@/context/AuthContext";
import { formSchema } from "./validations/SignUpValidation";



const SignupForm = () => {
    const { toast } = useToast();
    const { checkAuthUser } = useAuth();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            password2: ""
        },
    })

    async function tgAuth(user: TgUser) {
        const tgUser = await TelegramAuth(user)

        if (typeof (tgUser) !== "number") {
            const session = await Login(
                tgUser?.data.username,
                tgUser?.data.password
            )
            if (session === false) {
                return toast({
                    title: "Не удалось вoйти( 😭"
                })
            }
            const isLoggedIn = await checkAuthUser();
            if (isLoggedIn) navigate("/main")
        } else if (tgUser === 409) {
            return toast({ title: "Пользователь с таким ником уже существует!" })
        } else {
            return toast({ title: "Не удалось создать аккаунт 😭" })
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const user: INewUser = {
            username: values.username,
            password: values.password,
            img: null,
            role: "user"
        }
        const newUser = await CreateUserAccount(user);

        if (typeof (newUser) != "number") {
            navigate("/sign-in")
        } else if (newUser === 409) {
            return toast({ title: "Пользователь с таким ником уже существует!" })
        } else {
            return toast({ title: "Не удалось создать аккаунт 😭" })
        }
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
                                        <Input placeholder="Придумайте ваш пароль"{...field} className="rounded-[50px] w-full" type="password" />
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
                                        <Input placeholder="Повторите ваш пароль"{...field} className="rounded-[50px] w-full" type="password" />
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
                    <TLoginButton
                        botName="isapchatbot"
                        buttonSize={TLoginButtonSize.Large}
                        lang="ru"
                        usePic={true}
                        cornerRadius={20}
                        onAuthCallback={(user) => {
                            tgAuth(user)
                        }}
                        requestAccess={'write'}

                    />
                </div>

            </div>

        </div>
    )
}
export default SignupForm