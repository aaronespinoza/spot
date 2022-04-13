import { useEffect, useState } from "react"
//import AddSpotForm from '../components/AddSpotForm'

const CurrentLocation = props => { 
    
    const [location, setLocation] = useState({ lat: 51.501364, lng: -0.141890 })

    // geolocator location
    const success = position => {
        const coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setLocation(coordinates)
    }

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(success)
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(success)
                    }
            });
        }
    },[])

    return (
        <div>
            <div className="text-center py-4">
                <h1 style={{fontSize: 50}}>Welcome </h1>
            </div>
            <div className="text-center py-4">
                <h3>
                    Add a new Spot here
                </h3>
            </div>
            {/* <div className="container"  style={{maxWidth: "500px"}}>
                <AddSpotForm location={location} />
            </div> */}
        </div>
    )
}

export default CurrentLocation;