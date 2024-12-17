import axios from "axios";
import { useAuthStore } from "@/stores/auth";

export async function fetchProjectDetails(projectId) {
    const authStore = useAuthStore();

    if (!authStore.token) {
        throw new Error("User not authorized. Please log in.");
    }

    try {
        const response = await axios.post(
            `https://1c2c8eac-fed3-4b76-b130-c06b95b0f1e7.mock.pstmn.io/api/project/${projectId}`,
            {}, // Make sure the request body matches your API requirements
            {
                headers: {
                    Authorization: `Bearer ${authStore.token}`,
                },
            }
        );

        const { title, desc, tline, lead } = response.data; // Assuming this is the structure of the response
        return { title, desc, tline, lead };
    } catch (error) {
        if (error.response && error.response.status === 403) {
            throw new Error("Not authorized to view this project.");
        }
        throw new Error("Error fetching project details.");
    }
}
