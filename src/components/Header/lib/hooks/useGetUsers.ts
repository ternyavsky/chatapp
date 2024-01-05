import { useQuery } from "@tanstack/react-query"
import { getAllUsers } from "../../api/header"


export const useGetUsers = () => {
    return useQuery({
        queryFn: () => getAllUsers(),
        queryKey: ["allUsers"],
        enabled: false
    })
}