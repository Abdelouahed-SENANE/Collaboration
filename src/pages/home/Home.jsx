import React, {useState, useEffect} from 'react'
import { getListings } from '@data/listing/listingData'
import Hero from '@/components/home/Hero'
import Input from '@components/ui/Input'


const Home = () => {
    const [listings, setListings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const load = () => {
        setTimeout(() => setLoading(false), 1000)
    }

    const fetchListingsList = (query) => {
        const fetch = async () => {
            const listingData = await getListings(query)
            setListings(listingData)
        }
        
        fetch()
        load()

        fetch().catch(() => {
            load()
            setError('An error occured while fetching the data')
        })
    }

    useEffect(() => {
        fetchListingsList()
    }, []);

    const handleQueryChange = (e) => {
        const value = e.target.value
        fetchListingsList(value)
    }
    
    return (
        <>
            <Hero>
                <Input handleChange={handleQueryChange}/>
            </Hero>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {listings.map((listing) => (
                        <li key={listing.id}>{listing.title}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Home