import React, { useState } from 'react';
// import "./UpdatePage.css";
// import img3 from "../images/UpdateUser.png";
//we import the mutations from the 
//utils on the client end
import { useMutation } from '@apollo/client';
import { ADD_SPOT } from '../utils/mutations';
import { withScriptjs, withGoogleMap } from 'react-google-maps'


import Auth from '../utils/auth';

// import "./UpdatePage.css";
import img3 from "../images/UpdateUser.png";
import TeamSelect from "../components/TeamSelect";
import Map from "../components/Map";
import WrappedMap from "../components/Map";



import {
  Form,
  Button,
  FormSelect,
  Container,
} from "react-bootstrap";



const AddSpotPage = (props) => {
    const WrappedMap = withScriptjs(withGoogleMap( Map ));

    const [formState, setFormState] = useState({ title: '', description: '', image: '', coordinates: '' });
    const [addSpot, { error, data }] = useMutation(ADD_SPOT);

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
    console.log(formState);
    return (
      <div className="pt-5 justify-content-center align-items-center d-flex w-100"
        style={{
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="card-header bg-dark text-light p-2"></div>
        <div className="card-body">
          
          <div style={{width:"100vw", height: "100vh"}}>
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCkSX6_jmCQI-wyDySrrVTy6wTZC0KL7d8&libraries=places`}
              loadingElement={<div style={{height: "100%"}}/>}
              containerElement={<div style={{height: "100%"}}/>}
              mapElement={<div style={{height: "100%"}}/>}
            />

          </div>
          
          



          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>
      </div>



    );


  
};

export default AddSpotPage;