import { useQuery } from "@tanstack/react-query"
import { getAllUsers } from "../../api/leftbar"


export const useGetUsersQuery = () => {
    return useQuery({
        queryFn: () => getAllUsers(),
        queryKey: ["allUsers"],

    })
}