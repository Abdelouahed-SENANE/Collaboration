import React, {useState, useEffect} from 'react'
import { getListings } from '@data/listing/listingData'
import Hero from '@/components/home/Hero'
import Input from '@components/ui/Input'
import Card from '@components/ui/card/Card'
import CardWrapper from '@components/ui/card/CardWrapper'

const Home = () => {
    const [listings, setListings] = useState([])
    const [links, setLinks] = useState('1')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const load = () => {
        setTimeout(() => setLoading(false), 1000)
    }

    const fetchListingsList = (query) => {
        const fetch = async () => {
            const listingData = await getListings(query)
            setListings(listingData.data)
            setLinks(listingData.links)
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
                <Input 
                    classInput='border-2 border-black h-10 w-full rounded shadow-lg'
                    divStyle={{
                        width: '80%'
                    }}
                    handleChange={handleQueryChange}
                />
            </Hero>

            {loading ? (
                <p
                    className='mx-auto'
                >
                    Loading...
                </p>
            ) : error ? (
                <p
                    className='mx-auto'
                >
                    {error}
                </p>
            ) : (
                <CardWrapper links={links}>
                    {listings.map(({ id, title }) => (
                        <Card key={id} title={title} />
                    ))}
                </CardWrapper>
            )}
        </>
    )
}

export default Home