import { useState } from 'react'
import './App.css'
import {Button, Col, Modal} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Portal from "./assets/Img/Portal.jpg";
import UCave from "./assets/Img/UCave.png";
import GetOut from "./assets/Img/GetOut.png";
import StoneEngine from "./assets/Img/StoneEngine.png";
import CiteDesPixels from "./assets/Img/Cite_Des_Pixels.png";
import React from "react";

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
                    UCave est le premier jeu que j’ai développé, lors de la Ludum Dare 48, une Game Jam internationale de 48h sur le thème “Deeper and Deeper”.
                    Réalisé en équipe de trois avec Unity en C#, ce projet a marqué mes débuts dans le game development.<br/><br/>

                    Le joueur incarne un personnage tombé dans une grotte.
                    Pour s’échapper, il doit s’enfoncer toujours plus loin, surmonter des obstacles, et trouver une corde pour remonter.
                    Le gameplay repose sur l’exploration, des énigmes simples et une progression verticale inversée.<br/><br/>

                    Ce projet m’a permis de découvrir Unity, d’apprendre les bases du C# et de comprendre les enjeux du développement en temps limité.
                    Cette première expérience a confirmé ma volonté de me lancer dans la création de jeux vidéo.<br/><br/>

                    Moteur: Unity<br/>
                    Durée: 48h
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

function GetOutModal(props) {
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
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ISxT3MShTyI?si=RDNnanOW_vlL6R2W"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                    </iframe>
                </div>
                <p className="text-white modal-text">
                    Get Out est un jeu d’horreur psychologique réalisé en 72h pour la Brackey’s Game Jam, sur le thème “It Is Not Real”.
                    Créé avec deux amis sur Unity en C#, ce projet nous a permis de travailler l’ambiance et la narration dans un univers inquiétant.<br/><br/>

                    Le joueur se réveille seul dans un hôpital psychiatrique désert.
                    Aucun être humain à l’horizon, mais des phénomènes étranges surviennent au fil de l’exploration.
                    L’objectif : comprendre ce qui se passe et trouver un moyen de s’échapper.<br/><br/>

                    C’était ma première expérience sur un jeu en 3D, avec un vrai travail sur le sound design, les effets visuels et l’atmosphère.
                    Ce projet m’a appris à créer une expérience immersive et à jouer avec la perception du joueur.<br/><br/>

                    Moteur: Unity<br/>
                    Durée: 72h
                </p>

                <div className="text-center">
                    <a href="https://urukagall.itch.io/get-out" target="_blank" className="btn btn-primary">Lien Itch.io</a>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function StoneEngineModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className="text-white">
                    Stone Engine (DirectX 12)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/n8-n-MbZwqA?si=gzma0CjA6WUcNdGj"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                    </iframe>
                </div>
                <p className="text-white modal-text">
                    Ce moteur de jeu a été réalisé en 3 semaines dans le cadre d’un projet scolaire en équipe de 4, avec pour objectif d’apprendre le fonctionnement interne d’un game engine.
                    Nous avons développé ce projet en C++ avec DirectX 12, sans passer par une bibliothèque tierce orientée jeu.<br/><br/>

                    Nous avons mis en place un moteur capable de charger et d’afficher des modèles 3D, gérer une caméra libre et des shaders de base, le tout en temps réel.
                    L'accent a été mis sur la compréhension de la pipeline graphique, la gestion de la mémoire GPU, et la création d’un framework modulaire.<br/><br/>

                    Ce projet m’a permis de mieux comprendre ce qui se cache derrière les moteurs comme Unity ou Unreal.
                    Travailler directement avec DirectX 12 m’a apporté des bases solides sur les rendus 3D bas-niveau, et a renforcé ma capacité à collaborer sur des systèmes complexes en équipe.<br/><br/>

                    Languages: C++/DirectX12<br/>
                    Durée: 3 semaines
                </p>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function CDPModal(props) {
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
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eDzhL51SYHs?si=gFiY5jUBX_Oz6_SJ"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                    </iframe>
                </div>
                <p className="text-white modal-text">
                    La Cité des Pixels était un événement caritatif organisé par des étudiants du Gaming Campus, au profit de l’UNICEF.
                    L'événement a rassemblé plus de 94 joueurs sur un serveur Minecraft custom, avec des mini-jeux et défis en ligne et en présentiel.<br/><br/>

                    J’ai participé au projet en tant que développeur de plugins, en créant les systèmes de plusieurs mini-jeux proposés aux joueurs.
                    Sur place, j’ai aussi aidé à la gestion des équipes, à la coordination des animations et au bon déroulement technique de l’événement.<br/><br/>

                    Ce projet m’a permis de combiner programmation, jeu vidéo et événementiel.
                    C’est à cette occasion que j’ai découvert mon intérêt profond pour l’organisation d’événements caritatifs, et l’impact positif que le jeu peut avoir au-delà du divertissement.<br/><br/>

                    Languages: Java (Bukkit API)<br/>
                    Dons Récoltés: 67 253€
                </p>

                <div className="text-center">
                    <a href="https://citedespixels.fr" target="_blank" className="btn btn-primary">Lien du site</a>
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
    const [getGetOutModalShow, setGetOutModalShow] = React.useState(false);
    const [uCaveModalShow, setUCaveModalShow] = React.useState(false);
    const [stoneEngineModalShow, setStoneEngineModalShow] = React.useState(false);
    const [cDPModalShow, setCDPModalShow] = React.useState(false);

  return (
    <>

        <GetOutModal
            show={getGetOutModalShow}
            onHide={() => setGetOutModalShow(false)}
        />
        <UCaveModal
            show={uCaveModalShow}
            onHide={() => setUCaveModalShow(false)}
        />
        <StoneEngineModal
            show={stoneEngineModalShow}
            onHide={() => setStoneEngineModalShow(false)}
        />
        <CDPModal
            show={cDPModalShow}
            onHide={() => setCDPModalShow(false)}
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
                        description="Un jeu d’exploration en 2D créé en 48h, où vous devez vous enfoncer toujours plus profondément dans une grotte pour en ressortir."
                        onClick={() => setUCaveModalShow(true)}
                    />
                    <p className="date-timeline">2022</p>
                    <p className="date-timeline">2022</p>
                    <ProjectCard
                        title="GetOut (Brackey's Game Jam)"
                        image={GetOut}
                        description="Un jeu d’horreur en 3D développé en 72h, où vous explorez un hôpital psychiatrique désert, hanté par des phénomènes étranges."
                        onClick={() => setGetOutModalShow(true)}
                    />
                    <p className="date-timeline">2024</p>
                    <p className="date-timeline">2024</p>
                    <ProjectCard
                        title="Stone Engine (DirectX 12)"
                        image={StoneEngine}
                        description="Un moteur de jeu développé en 3 semaines avec DirectX 12, pour comprendre les fondations techniques des engines avant d’en utiliser."
                        onClick={() => setStoneEngineModalShow(true)}
                    />
                    <ProjectCard
                        title="Cité des Pixels (Caritatif)"
                        image={CiteDesPixels}
                        description="Un événement caritatif Minecraft pour l’UNICEF, où j’ai développé les mini-jeux et participé à l’organisation sur place."
                        onClick={() => setCDPModalShow(true)}
                    />
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
