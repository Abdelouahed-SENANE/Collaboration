import { fetchListings } from './listingService'

export const getListings = async () => {
    try {
        const response = await fetchListings()
        return response.data.listings
    } catch (error) {
        throw error
    }
}