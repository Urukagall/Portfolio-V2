import { useState } from 'react'
import './App.css'
import {Button, Col, Modal} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Portal from "./assets/Img/Portal.jpg";
import UCave from "./assets/Img/UCave.png";
import GetOut from "./assets/Img/GetOut.png";
import React from "react";

function CitePixelModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className="text-white">
                    Cité des Pixels
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4OF2MxGelZU?si=GmSYlDvoHVKYdt5U"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                    </iframe>
                </div>
                <p className="text-white modal-text">
                    La Cité des Pixels était un évènement caritatif pour l'Unicef organisé par des élèves du Gaming Campus sur le jeu Minecraft avec plus de 94 joueurs.
                    Le but de l'évènement était de récolter des dons pour l'Unicef tout en s'affrontant sur ce jeu pour être la meilleur équipe. <br/>
                    J'ai pu développer sur java les plugins des mini-jeux de l'évènement et aider à la gestion des équipes en présentiel.
                </p>
                <p className="text-white modal-text">
                    Dons Récoltés: 67 253€<br/>
                </p>

                <div className="text-center">
                    <a href="https://citedespixels.fr" target="_blank" className="btn btn-primary">Voir le site</a>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function ProjectCard({ title, image, description, onClick }) {
    return (
        <div className="card-custom" onClick={onClick}>
            <div className="info-project">
                <h3 className="title-project">{title}</h3>
                {image && <Image src={image} rounded className="image-project" />}
                <p>{description}</p>
            </div>
        </div>
    );
}

function Project() {
    const [citePixelModalShow, setCitePixelModalShow] = React.useState(false);

  return (
    <>

        <Button variant="primary" onClick={() => setCitePixelModalShow(true)}>
            Launch vertically centered modal
        </Button>

        <CitePixelModal
            show={citePixelModalShow}
            onHide={() => setCitePixelModalShow(false)}
        />

        <Col md={{ span: 6, offset: 3 }}>
            <div className="timeline">
                <div className="outer">
                    <p className="test">2021</p>
                    <p className="test">2021</p>
                    <ProjectCard
                        title="UCave (Ludum Dare 48)"
                        image={UCave}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        onClick={() => setCitePixelModalShow(true)}
                    />
                    <p className="test">2022</p>
                    <p className="test">2022</p>
                    <ProjectCard
                        title="GetOut (Brackey's Game Jam)"
                        image={GetOut}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        onClick={() => setCitePixelModalShow(true)}
                    />
                    <div className="card-custom">
                        <div className="info-project">
                            <h3 className="title-project">Title 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                    <div className="card-custom">
                        <div className="info-project">
                            <h3 className="title-project">Title 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                    <div className="card-custom">
                        <div className="info-project">
                            <h3 className="title-project">Title 5</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    </>
  )
}

export default Project
