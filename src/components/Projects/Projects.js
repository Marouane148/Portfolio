import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import todolist from "../../Assets/Projects/todolist.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import kaka from "../../Assets/Projects/kaka.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Mes Réalisations <strong className="purple">Récentes  </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="Application To-Do List"
              description="J'ai développé une application To-Do List en utilisant Java avec Maven pour le backend et React.js pour le frontend. Le backend, basé sur Spring Boot, gère les fonctionnalités comme la création, modification et suppression des tâches, avec une base de données pour la persistance. Le frontend, conçu avec React.js, offre une interface intuitive et responsive pour une gestion fluide des tâches.Les deux parties communiquent en temps réel pour synchroniser les données.Ce projet démontre mes compétences en développement full stack avec des technologies modernes."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Application Chat Bot"
              description="J'ai développé une application de Chat Bot en utilisant Flutter, offrant une interface mobile intuitive et responsive. L'application permet une communication en temps réel avec le bot, intégrant des réponses automatisées basées sur les entrées utilisateur. Grâce à Flutter, le design est moderne et adapté à toutes les tailles d’écran. Le backend, connecté via des APIs, gère les interactions et les données, garantissant des échanges fluides. Ce projet illustre ma maîtrise de Flutter pour le développement d'applications mobiles et mon aptitude à créer des solutions interactives et performantes.."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kaka}
              isBlog={false}
              title="Jeu d'Échecs"
              description="J'ai développé un jeu d'échecs en utilisant Rust, mettant en avant la puissance de ce langage pour créer des applications performantes et sûres. Le jeu comprend une logique complète pour les règles des échecs, avec la gestion des mouvements valides, des échecs et échecs et mat. L'interface utilisateur a été conçue en mode console, avec un rendu clair du plateau et des pièces. Ce projet démontre ma capacité à utiliser Rust pour concevoir des algorithmes complexes tout en assurant des performances optimales et une gestion rigoureuse de la mémoire.."
              ghLink=""
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
