import { useState } from 'react'
import './App.css'
import {Badge, Button, Col, Modal} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Portal from "./assets/Img/Portal.jpg";
import UCave from "./assets/Img/UCave.png";
import GetOut from "./assets/Img/GetOut.png";
import StoneEngine from "./assets/Img/StoneEngine.png";
import CiteDesPixels from "./assets/Img/Cite_Des_Pixels.png";
import StarCluster from "./assets/Img/StarCluster.png";
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

function StarClusterModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className="text-white">
                    Star Cluster (Projet de fin d’année)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/r7vRVnPHQjg?si=CXIa8nu5HWK2mzYI"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                    </iframe>
                </div>
                <p className="text-white modal-text">
                    Ce projet de fin d’année a été réalisé en équipe sur Unity.
                    Il s’agissait de créer un jeu mobile narratif en vue top-down, mêlant exploration et ambiance poétique.
                    L’objectif du joueur est de parcourir un monde éclaté pour en réparer les fragments et restaurer l’équilibre de l’univers.<br/><br/>

                    Le gameplay repose sur l’exploration libre, la collecte d’objets-clés et des interactions scénarisées avec des éléments du décor.
                    L’histoire est racontée de manière environnementale, avec des effets visuels et sonores renforçant l’immersion et la narration.<br/><br/>

                    J’ai occupé le rôle de lead tech sur ce projet, une première pour moi.
                    J’ai coordonné le développement, structuré l’architecture du code, et aidé les membres de l’équipe à progresser techniquement.
                    Cette expérience m’a appris à prendre des décisions techniques globales tout en gardant une bonne dynamique de groupe.<br/><br/>

                    Moteur: Unity<br/>
                    Durée: 1 mois
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function PortalModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className="text-white">
                    Star Cluster (Projet de fin d’année)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SPqimDlyaas?si=a991C1xouLE1SrNE"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                    </iframe>
                </div>
                <p className="text-white modal-text">
                    Ce projet scolaire avait pour objectif de nous initier à Unreal Engine 5 à travers la création d’un prototype de jeu en Blueprints.
                    En équipe, nous avons choisi de reconstituer le gameplay de Portal, célèbre pour ses mécaniques de téléportation et ses énigmes spatiales.<br/><br/>

                    Le joueur dispose d’un pistolet à portails permettant de créer deux points de passage instantanés entre différentes zones.
                    Nous avons reproduit les mécaniques de tir, de traversée des portails, et certaines énigmes basées sur la physique, le tout sans écrire une seule ligne de code, uniquement avec le système visuel de Blueprint.<br/><br/>

                    Ce projet m’a permis de découvrir les fondamentaux d’Unreal Engine, de comprendre la logique de Blueprint et de manipuler la physique du moteur.
                    C’était une excellente première approche pour appréhender les possibilités de l’engine et poser des bases solides pour de futurs projets plus complexes.<br/><br/>

                    Moteur: Unreal<br/>
                    Durée: 1 semaine
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function ProjectCard({ title, image, description, onClick, tags = [] }) {
    return (
        <div className="card-custom" onClick={onClick}>
            <div className="info-project">
                <div className="title-project">
                    <h3>{title}</h3>
                    <div>
                        {tags.map((tag, idx) => (
                            <Badge className="tag-project" key={idx}>
                                <span className="tag-project-text">{tag}</span>
                            </Badge>
                        ))}
                    </div>
                </div>
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
    const [starClusterModalShow, setStarClusterModalShow] = React.useState(false);
    const [portalModalShow, setPortalModalShow] = React.useState(false);

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
        <StarClusterModal
            show={starClusterModalShow}
            onHide={() => setStarClusterModalShow(false)}
        />
        <PortalModal
            show={portalModalShow}
            onHide={() => setPortalModalShow(false)}
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
                        tags={["Unity", "C#", "Game Jam"]}
                    />
                    <p className="date-timeline">2022</p>
                    <p className="date-timeline">2022</p>
                    <ProjectCard
                        title="GetOut (Brackey's Game Jam)"
                        image={GetOut}
                        description="Un jeu d’horreur en 3D développé en 72h, où vous explorez un hôpital psychiatrique désert, hanté par des phénomènes étranges."
                        onClick={() => setGetOutModalShow(true)}
                        tags={["Unity", "C#", "Game Jam"]}
                    />
                    <p className="date-timeline">2024</p>
                    <p className="date-timeline">2024</p>
                    <ProjectCard
                        title="Stone Engine (DirectX 12)"
                        image={StoneEngine}
                        description="Un moteur de jeu développé en 3 semaines avec DirectX 12, pour comprendre les fondations techniques des engines avant d’en utiliser."
                        onClick={() => setStoneEngineModalShow(true)}
                        tags={["C++", "DirectX12"]}
                    />
                    <ProjectCard
                        title="Cité des Pixels (Caritatif)"
                        image={CiteDesPixels}
                        description="Un événement caritatif Minecraft pour l’UNICEF, où j’ai développé les mini-jeux et participé à l’organisation sur place."
                        onClick={() => setCDPModalShow(true)}
                        tags={["Java", "Minecraft", "Caritatif"]}
                    />
                    <p className="date-timeline">2025</p>
                    <p className="date-timeline">2025</p>
                    <ProjectCard
                        title="Portal (Unreal Engine 5)"
                        image={Portal}
                        description="Une reconstitution du jeu Portal sur Unreal Engine en Blueprints, pour découvrir le moteur et ses mécaniques visuelles."
                        onClick={() => setPortalModalShow(true)}
                        tags={["Unreal", "Blueprint"]}
                    />
                    <ProjectCard
                        title="Star Cluster (Projet de fin d’année)"
                        image={StarCluster}
                        description="Un jeu mobile narratif en vue top-down, où le joueur explore un monde fragmenté pour réparer l’univers."
                        onClick={() => setStarClusterModalShow(true)}
                        tags={["Unity", "Mobile"]}
                    />
                </div>
            </div>
        </Col>
    </>
  )
}

export default Project
