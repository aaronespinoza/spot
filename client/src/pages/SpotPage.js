import React, { useEffect, useState } from 'react';
import "../images/flag-svgrepo-com.svg";
import { useMutation } from '@apollo/client';
import { ADD_SPOT } from '../utils/mutations';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Auth from '../utils/auth';
import img3 from "../images/UpdateUser.png";
import Map from "../components/Map";
import SpotInfo from '../components/SpotInfo';
import SpotDetails from '../components/SpotDetails';
//import CarouselFade from '../components/CarouselFade';
import SpotTabs from '../components/SpotTabs';
import mapStyles from '../utils/mapStyles';
import Carousel from "../components/Carousel"
import {
  Row,
  Col,
  Container
} from "react-bootstrap";
import "./SpotPage.css";



const SpotPage = (props) => {

    const {isLoaded}= useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    const[map, setMap]= useState( /** @type google.maps.GoogleMap */ (null))

    if(!isLoaded){
     return <div value="loading"/>
    }
    return (
      <div className="papa" md={{ span: 10, offset: 1 }}>
        <Row>
          <Col md={{ span: 10, offset: 1 }} >

            <Container className="carouselContainer">
              <SpotInfo className="infoCont"></SpotInfo>


            </Container>
          </Col>
        </Row>
        <Row >
          <Col >
          <SpotTabs></SpotTabs>
          </Col>
          <Col >
            <GoogleMap 
            center={{lat:SpotDetails[0].latitude, lng: SpotDetails[0].longitude}} 
            zoom={14} 
            mapContainerStyle={{width: "100%", height:"100%"}}
            onLoad={map=>setMap(map)}
            options={{ styles: mapStyles,
              disableDefaultUI: true,
              zoomControl:true}}
            >
                 <Marker
                 key={SpotDetails[0].id}
                 position={{lat:SpotDetails[0].latitude, lng: SpotDetails[0].longitude}}
                 icon={{
                   url: "https://www.svgrepo.com/show/289489/red-flag.svg",
                   scaledSize: new window.google.maps.Size(40,40),
                   origin: new window.google.maps.Point(0,0),
                   anchor: new window.google.maps.Point(20,20)
                 }}
                 />
            </GoogleMap>
          </Col>
        </Row>
        
      </div>
    );
};

export default SpotPage;