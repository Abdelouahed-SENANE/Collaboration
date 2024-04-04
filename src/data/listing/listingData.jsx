import { fetchListings } from './listingService'

export const getListings = async (query = '', page = '1', ) => {
    try {
        const response = await fetchListings(query, page)
        console.log(response.data.listings)
        return {
            'data': response.data.listings.data,
            'links': response.data.listings
        }
    } catch (error) {
        throw error
    }
}