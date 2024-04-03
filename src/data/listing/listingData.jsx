import { fetchListings } from './listingService'

export const getListings = async (query = '') => {
    try {
        const response = await fetchListings(query)
        return response.data.listings
    } catch (error) {
        throw error
    }
}