import { useState, useEffect, useRef, useCallback } from "react"


const AddSpotForm = props => {
    // sets state for blank listing
    const [listing, setListing] = useState({
        name: "",
        description: "",
        image: {},
        latLng: props.location
    })

    // adds form change handling
    const handleChange = e => {
        setListing({...listing, [e.target.id]: e.target.value})
    }


    // handles form submission
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(postListing(listing))
    }


    return (
        <form onSubmit={handleSubmit}>

        </form>
    )
}

export default AddSpotForm;
