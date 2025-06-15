import { useState } from 'react'
import './App.css'
import PhotoProfile from "./assets/Img/PhotoProfile.png";
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Unity from "./assets/Img/Unity.png";
import Unreal from "./assets/Img/unreal-engine.png";
import CPP from "./assets/Img/C++.png";
import CS from "./assets/Img/CS.png";
import C from "./assets/Img/C.png";
import Java from "./assets/Img/Java.png";
import React from "./assets/Img/React.png";
import Python from "./assets/Img/Python.png";



function Competences() {

  return (
    <>
        <div id="competences" className="d-flex justify-content-center align-items-center flex-column padding-part">
            <p className="roboto-400 title-competences title-color">Compétences</p>
        </div>
        <Container className="competences-container">
            <Row className="justify-content-center">
                <Col md={4} className="justify-content-center align-items-center d-flex">
                    <div className="d-flex flex-column align-items-center">
                        <p className="text-competences roboto-400 title-color">Moteurs</p>
                        <div className="d-flex justify-content-center">
                            <Image src={Unity} className="image-competences"/>
                            <Image src={Unreal} className="image-competences"/>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="justify-content-center align-items-center d-flex">
                    <div className="d-flex flex-column align-items-center">
                        <p className="text-competences roboto-400 title-color">Languages Principales</p>
                        <div className="d-flex justify-content-center">
                            <Image src={CS} className="image-competences"/>
                            <Image src={CPP} className="image-competences"/>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="justify-content-center align-items-center d-flex">
                    <div className="d-flex flex-column align-items-center">
                        <p className="text-competences roboto-400 title-color">Languages Secondaires</p>
                        <div className="d-flex justify-content-center">
                            <Image src={C} className="image-competences"/>
                            <Image src={Java} className="image-competences"/>
                            <Image src={Python} className="image-competences"/>
                            <Image src={React} className="image-competences"/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Competences
