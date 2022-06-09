//import { getLocation } from "graphql";
import React,{ useState, useEffect, useRef, useCallback } from "react"
import { Form, Button } from "react-bootstrap"
import "../pages/AddSpotPage.css"
import StarRating from "./StarRating";
import SpotDetails from '../components/SpotDetails';

import {
    Row,
    Col,
  } from "react-bootstrap";


const SpotInfo = props => {

    

    return (
        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="string" placeholder="Enter title" readOnly="true"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="string" placeholder="Enter description" readOnly="true"/>
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
            <Form.Control type="string" placeholder="Enter Image" readOnly="true"/>
            </Form.Group>
                     

        </Form>
    )
}

export default SpotInfo;