import { useState, useEffect, useRef, useCallback } from "react"
import { Form, Button } from "react-bootstrap"


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
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="string" placeholder="Enter title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="string" placeholder="Enter description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control type="string" placeholder="Enter Image" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Coordinates</Form.Label>
            <Form.Control type="string" placeholder="Coordinates" />
            </Form.Group>
            
        <Button variant="primary" type="submit">
            Submit
        </Button>

        </Form>
    )
}

export default AddSpotForm;
