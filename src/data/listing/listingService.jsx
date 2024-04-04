import instance from "../../services/api/api"

export const fetchListings = async (query, page) => {
    console.log(instance)
    try {
        const response = await instance.get(`/listings?query=${query}&page=${page}`)
        return response
    } catch (error) {
        console.log("Error fetching listings:", error)
        throw error
    }
}