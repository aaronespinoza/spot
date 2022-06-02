import React from 'react';
import {GoogleMap} from '@react-google-maps/api';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
// import useStyles from './styles.js';

const Map = ({ coords, setCoords }) => {
  //const matches = useMediaQuery('(min-width:600px)');
  //const classes = useStyles();

  return (
    <div >
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        //options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
        }}
        // onChildClick={(child) => setChildClicked(child)}
      >
        
      </GoogleMap>
    </div>
  );
};

export default Map;
