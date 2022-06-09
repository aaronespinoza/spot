import React, { useEffect, useState } from 'react';
import "../images/flag-svgrepo-com.svg";
import SpotDetails from './SpotDetails';
import { selectHttpOptionsAndBodyInternal, useMutation } from '@apollo/client';
import { ADD_SPOT } from '../utils/mutations';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import {
  Row,
  Col,
  Container,
  Card,
  Dropdown,
  Button,
} from "react-bootstrap";

const List = () => {

   const [rating, setRating]= useState("");

   const renderCard= (card, index)=>{
       return(
    <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
        </Card.Body>
    </Card>
       );
   };


    return (
      <div >
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu value={rating} onChange={(e)=> setRating(e.target.value)}>
                <Dropdown.Item value={0}>All</Dropdown.Item>
                <Dropdown.Item  value={3}>Above 3.0</Dropdown.Item>
                <Dropdown.Item value={4.0}>Above 4.0</Dropdown.Item>
                <Dropdown.Item value={4.5}>Above 4.5</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

       {SpotDetails.map(renderCard)}


      </div>
    );
};

export default List;