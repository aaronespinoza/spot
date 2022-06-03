//import { getLocation } from "graphql";
import React,{ useState, useEffect, useRef, useCallback } from "react"
import { Form, Button } from "react-bootstrap"
import "../pages/AddSpotPage.css"
import StarRating from "./StarRating";
import {
    Row,
    Col,
  } from "react-bootstrap";


const AddSpotForm = props => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    const getLocation = () => {
          console.log("good click")
          navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          }
    )};

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

            <Row>
            <Col>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Worth it?</Form.Label>
            <StarRating/>
            </Form.Group>

            </Col>
            <Col>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Difficulty</Form.Label>
            <StarRating/>
            </Form.Group>

            </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control type="string" placeholder="Enter Image" />
            </Form.Group>

            <Row>
            <Col>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Latitude</Form.Label>
            <Form.Control type="string" value={lat} readOnly="true"/>
            </Form.Group>

            </Col>
            <Col>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Longitude</Form.Label>
            <Form.Control type="string" value={lng} readOnly="true" />
            </Form.Group>

            </Col>
            </Row>

            <button onClick={getLocation}>Get Location</button>
            
            
        <Button variant="primary" type="submit">
            Submit
        </Button>

        </Form>
    )
}

export default AddSpotForm;
