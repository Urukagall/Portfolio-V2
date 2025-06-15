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

function UCaveModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className="text-white">
                    UCave (Ludum Dare 48)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UEWFQm2KxMc?si=UPee3ohxpmHM7O0D"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                    </iframe>
                </div>
                <p className="text-white modal-text">
                    UCave est mon premier jeu réalisé en 48h pour la Ludum Dare 48 qui est une GameJam très connue, le thème de cette GameJam était "Deeper and Deeper" soit de plus en plus profond.<br/>
                    J'ai développé ce jeu sur Unity en C# avec deux ami, cela nous à fait découvrir Unity et le développement de jeux vidéo.Le but du jeu est de sortir de la grotte dans laquelle on est tombé par un long trou.
                    Pour cela il faut avancer dans le grotte en s'enfonçant dans celle là, trouver un moyen de franchir les obstacle qui se mettront en travers de votre route pour enfin trouver un corde qui vous fera remonter.<br/>
                    Grâce à cette GameJam j'ai pu découvrir le développement de jeux vidéo et me lancer dans cette voie.
                </p>

                <div className="text-center">
                    <a href="https://rouesoify.itch.io/u-cave" target="_blank" className="btn btn-primary">Lien Itch.io</a>
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
                <p className="title-color">{description}</p>
            </div>
        </div>
    );
}

function Project() {
    const [citePixelModalShow, setCitePixelModalShow] = React.useState(false);
    const [uCaveModalShow, setUCaveModalShow] = React.useState(false);

  return (
    <>

        <CitePixelModal
            show={citePixelModalShow}
            onHide={() => setCitePixelModalShow(false)}
        />
        <UCaveModal
            show={uCaveModalShow}
            onHide={() => setUCaveModalShow(false)}
        />

        <div id="projet" className="d-flex justify-content-center align-items-center flex-column padding-part">
            <p className="roboto-400 title-competences title-color">Projet</p>
        </div>

        <Col md={{ span: 6, offset: 3 }}>
            <div className="timeline">
                <div className="outer">
                    <p className="date-timeline">2021</p>
                    <p className="date-timeline">2021</p>
                    <ProjectCard
                        title="UCave (Ludum Dare 48)"
                        image={UCave}
                        description="Jeu réalisé en 48h pour la Ludum Dare 48, ceci est mon premier jeu et à été développé sur Unity en C#."
                        onClick={() => setUCaveModalShow(true)}
                    />
                    <p className="date-timeline">2022</p>
                    <p className="date-timeline">2022</p>
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
