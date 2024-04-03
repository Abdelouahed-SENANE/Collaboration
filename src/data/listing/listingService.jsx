import instance from "../../services/api/api"

export const fetchListings = async (query) => {
    console.log(instance)
    try {
        const response = await instance.get(`/listings?query=${query}`)
        return response
    } catch (error) {
        console.log("Error fetching listings:", error)
        throw error
    }
}