import { useQuery } from "@tanstack/react-query"
import { getUserByUsername } from "../../api/userRightUpDise"


export const useUserRightUpSideQuery = (username: string) => {
    return useQuery({
        queryFn: () => getUserByUsername(username),
        queryKey: ["users"],

    })
}