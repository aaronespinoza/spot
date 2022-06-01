import React, { useState } from 'react';
// import "./UpdatePage.css";
// import img3 from "../images/UpdateUser.png";
//we import the mutations from the 
//utils on the client end
import { useMutation } from '@apollo/client';
import { ADD_SPOT } from '../utils/mutations';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


import Auth from '../utils/auth';

// import "./UpdatePage.css";
import img3 from "../images/UpdateUser.png";
import TeamSelect from "../components/TeamSelect";
import Map from "../components/Map";
import AddSpotForm from "../components/AddSpotForm";
import WrappedMap from "../components/Map";
import CurrentLat from "../components/CurrentLat";



import {
  Form,
  Button,
  FormSelect,
  Container,
  Row,
  Col,
} from "react-bootstrap";



const AddSpotPage = (props) => {
    //const WrappedMap = withScriptjs(withGoogleMap( Map ));
    // const location = CurrentLocation
    // const [formState, setFormState] = useState({ title: '', description: '', image: '', coordinates: '' });
    // const [addSpot, { error, data }] = useMutation(ADD_SPOT);
    // const[latitude, setLatitude]= useState('');
    // const[longitude, setLongitude]= useState('');
    const {isLoaded}= useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    const center = {lat: CurrentLat.value, lng: 2.2945}

    //Finds users location
    React.useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{

        //setLatitude(position.coords.latitude);
        //setLongitude(position.coords.longitude);
        console.log(position.coords);
        console.log(CurrentLat);

      })
    },[])

    //update on form changes
    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value,
      });
    };

    // submit update team form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      const user = Auth.getProfile()
      console.log(user)
      try {
        const { data } = await addSpot({
          variables: {
            
            ...formState,
          id: user.data._id
          },
        });

           Auth.login(data.updateTeam.token);
      } catch (e) {
        console.error(e);
      }

      // clear form values
      setFormState({
        favoriteTeam: '',
      });
    };
    //console.log(formState);

    if(!isLoaded){
     return <div value="loading"/>
    }
    return (
      <div className="pt-5 justify-content-center align-items-center d-flex w-100"
        style={{
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <AddSpotForm></AddSpotForm>

        <GoogleMap 
        center={center} 
        zoom={15} 
        mapContainerStyle={{width: "80%", height:"80%"}}>

        </GoogleMap>
        
      </div>
    );
};

export default AddSpotPage;