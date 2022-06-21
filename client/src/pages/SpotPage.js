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
import CarouselFade from '../components/CarouselFade';
import SpotTabs from '../components/SpotTabs';
import mapStyles from '../utils/mapStyles';
import {
  Row,
  Col,
} from "react-bootstrap";

const SpotPage = (props) => {

    const {isLoaded}= useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    const[map, setMap]= useState( /** @type google.maps.GoogleMap */ (null))

    if(!isLoaded){
     return <div value="loading"/>
    }
    return (
      <div>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <CarouselFade></CarouselFade>
          </Col>
        </Row>
        <Row>
          <Col>
            <SpotInfo></SpotInfo>
          </Col>
          <Col>
            <GoogleMap 
            center={{lat:SpotDetails[0].latitude, lng: SpotDetails[0].longitude}} 
            zoom={15} 
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
        <Row>
          <SpotTabs></SpotTabs>
        </Row>
      </div>
    );
};

export default SpotPage;