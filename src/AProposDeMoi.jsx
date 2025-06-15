import { useState } from 'react'
import './App.css'
import Image from 'react-bootstrap/Image';
import PhotoProfile from "./assets/Img/PhotoProfile.png";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";


function AProposDeMoi() {

  return (
    <>
        <h3 id="about" className="text-center title-propos roboto-400 title-color padding-part">A PROPOS DE MOI</h3>
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 2 }} className="justify-content-center align-items-center d-flex">
                    <Image src={PhotoProfile} rounded className="image-propos" />
                </Col>
                <Col md={4} className="text-propos">
                    <p className="roboto-400 text-color">
                        Je m'appelle Dany JORGE AFONSO, étudiant en développement informatique spécialisé dans les jeux vidéo.<br/>
                        J’ai eu l’occasion de travailler sur plusieurs projets, que ce soit dans le cadre scolaire, lors de Game Jams, ou à travers des projets personnels.<br/>
                        Ces jeux ont été développés avec Unreal Engine (en C++ et Blueprint), Unity (en C#), ainsi qu’en C++ pur,
                        ce qui m’a permis de consolider mes compétences techniques tout en explorant différentes approches de gameplay et d’architecture logicielle.
                    </p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AProposDeMoi
