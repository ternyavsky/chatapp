import { useQuery } from "@tanstack/react-query"
import { getUserByUsername } from "../../api/userWindow"


export const useUserWindowQuery = (username: string) => {
    return useQuery({
        queryFn: () => getUserByUsername(username),
        queryKey: ["users"],

    })
}