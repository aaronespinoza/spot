//import { getLocation } from "graphql";
import React,{ useState, useEffect, useRef, useCallback } from "react"
import { Form, Button } from "react-bootstrap"
import "../pages/AddSpotPage.css"
//import StarRating from "./StarRating";
import SpotDetails from '../components/SpotDetails';
import StarDisplay from "./StarDisplay";

import {
    Row,
    Col,
    Card
  } from "react-bootstrap";


const SpotInfo = props => {


    return (

        <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{SpotDetails[0].title}</Card.Title>
            <Row>
            <Col>
            <Button variant="warning"  type="submit" value="2" size="sm">challenging</Button>{' '}
            </Col>
            <Col>
            <StarDisplay/>
            </Col>
            </Row>

            <Card.Subtitle className="mb-2 text-muted">{SpotDetails[0].text}</Card.Subtitle>
            

        </Card.Body>
        </Card>
        
        
        </>
    )
}

export default SpotInfo;