import { getCookie } from "@/helpers/cookie";

export async function getCurrUser() {
    const token = await getCookie("token")
    return token !== null

}