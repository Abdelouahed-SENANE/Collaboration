import instance from '@/config/axiosConfig'

export const fetchListings = async () => {
    try {
        const response = await instance.get('/listings');
        return response
    } catch (error) {
        console.log("Error fetching listings:", error)
        throw error
    }
}