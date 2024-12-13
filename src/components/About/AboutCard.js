import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Je m'appelle <span className="purple"> Marouane Kaidi </span>
            de <span className="purple"> Paris.</span>
            <br />
            Un développeur passionné spécialisé en développement web full stack, applications mobiles et intelligence artificielle. Avec plusieurs années d'expérience, j'ai acquis une solide maîtrise des technologies modernes et classiques, et je suis toujours motivé pour relever de nouveaux défis techniques.
            <br />
            J'adore explorer des solutions innovantes pour créer des produits numériques performants et adaptés aux besoins des utilisateurs. Ma curiosité et ma rigueur me poussent constamment à apprendre et à m'améliorer, que ce soit dans la création de sites web professionnels, le développement d'applications ou l'optimisation de projets digitaux.

Ma vision : offrir des solutions simples, efficaces et modernes qui répondent aux attentes du monde numérique d'aujourd'hui.
            <br />
            <br />
            En plus du codage, voici quelques autres activités que j'adore faire !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer aux jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Efforcez-vous de créer des choses qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">Marouane</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
