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
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>

        </Form>
    )
}

export default AddSpotForm;
