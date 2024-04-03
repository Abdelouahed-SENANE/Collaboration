import { fetchListings } from './listingService'

export const getListings = async (page = '1', query = '') => {
    try {
        const response = await fetchListings(page, query)
        return {
            'data': response.data.listings.data,
            'links': response.data.listings.links
        }
    } catch (error) {
        throw error
    }
}