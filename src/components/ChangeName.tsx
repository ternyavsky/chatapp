import { Input } from './ui/input'
import { Button } from './ui/button'
import { useAuth } from '@/context/AuthContext'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from './ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Login, changeUser } from '@/api/auth'
import { useToast } from './ui/use-toast'

type NameMenuProps = {
    setGroup: (arg: boolean) => void,
    setSettings: (arg: boolean) => void,
    setMenu: (arg: boolean) => void

}
const ChangeName = ({ setGroup, setSettings, setMenu }: NameMenuProps) => {
    const { user, checkAuthUser } = useAuth();
    const { toast } = useToast();
    const formSchema = z.object({
        username: z.string().min(2, "Ник не может быть короче 2 символов").max(50),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: user.username,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const newUser = await changeUser(values.username)
        if (newUser === 409) {
            return toast({ title: "Пользователь с таким ником уже существует!" })
        }
        await Login(newUser.username, newUser.password)
        await checkAuthUser()
        setGroup(false);
        setSettings(false);
        setMenu(false)
    }
    return (<>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field })     /** Returns a Date object representing the form control's value, if applicable; otherwise, returns null. Can be set, to change the value. Throws an "InvalidStateError" DOMException if the control isn't date- or time-based. */ => (
                        <FormItem>
                            <FormDescription className='flex-center mt-5 text-white'>Сменить ник</FormDescription>
                            <FormControl>
                                <Input className="rounded-[50px] flex-center border-[#464646] focus:border-4 bg-[#626262] h1-bold font-semibold flex w-60  mx-auto  mt-10" {...field} />
                            </FormControl>
                            <FormMessage className='w-60 flex-center text-xs mx-auto '></FormMessage>
                        </FormItem>    /** Returns a Date object representing the form control's value, if applicable; otherwise, returns null. Can be set, to change the value. Throws an "InvalidStateError" DOMException if the control isn't date- or time-based. */
                    )}
                />
                <Button
                    variant={"outline"}
                    type="submit"
                    className='rounded-[50px] bg-inherit border-[3px] h1-bold flex-center font-semibold w-52 mx-auto mt-4'
                    onClick={() => {

                    }}>
                    Submit
                </Button>
            </form>
        </Form>
    </>
    )
}

export default ChangeName