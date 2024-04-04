import { serviceFetchUser } from "./UserService";

export const getUser = async () => {
    try {
        const response = await serviceFetchUser()
        return response;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.log("User not authenticated. Redirecting to login page...");
        } else {
            console.error("Error fetching user data:", error);
        }
    }
}