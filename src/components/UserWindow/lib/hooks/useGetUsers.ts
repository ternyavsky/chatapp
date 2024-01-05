import { useQuery } from "@tanstack/react-query"
import { getAllUsers } from "../../api/userWindow"

export const useGetUsersQuery = () => {
    return useQuery({
        queryFn: () => getAllUsers(),
        queryKey: ["allUsers"],

    })
}