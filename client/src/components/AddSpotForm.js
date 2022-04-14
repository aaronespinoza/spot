//import { getLocation } from "graphql";
import React,{ useState, useEffect, useRef, useCallback } from "react"
import { Form, Button } from "react-bootstrap"
import CurrentLocation from "../components/CurrentLocation";


const AddSpotForm = props => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);


    
    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          }, () => {
            setStatus('Unable to retrieve your location');
          });
        }
      }

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


    React.useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
  
          console.log(position.coords);
        })
      },[])


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

            <div onLoad={getLocation}>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
            </div>
            <button onClick={getLocation}>Get Location</button>
            <div>Coordinates</div>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
            
        <Button variant="primary" type="submit">
            Submit
        </Button>

        </Form>
    )
}

export default AddSpotForm;
