import instance from "../../services/api/api"

export const fetchListings = async (query) => {
    try {
        const response = await instance.get(`/listings?query=${query}`)
        return response
    } catch (error) {
        console.log("Error fetching listings:", error)
        throw error
    }
}