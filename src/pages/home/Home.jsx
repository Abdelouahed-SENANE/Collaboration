import React, {useState, useEffect} from 'react'
import { getListings } from '@data/listing/listingData'
import Hero from '@/components/home/Hero'



const Home = () => {
    const [listings, setListings] = useState([])
    const [query, setQuery] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const load = () => {
        setTimeout(() => setLoading(false), 1000)
    }

    useEffect(() => {
            const fetchListingsList = async () => {
                const listingData = await getListings()
                setListings(listingData)
            }
            
            fetchListingsList()
            load()
            

            fetchListingsList().catch(() => {
                load()
                setError('An error occured while fetching the data')
            })
    }, []);

    const handleQueryChange = (e) => {
        const value = e.target.value

        
    }
    
    return (
        <>
            <Hero query={query} onQueryChange={handleQueryChange}/>
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