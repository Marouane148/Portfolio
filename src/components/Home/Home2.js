import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ <span className="purple"> -MOI  </span> DE ME PRÉSENTER
            </h1>
            <p className="home-about-body">
            Je suis tombé amoureux de la programmation et, au moins, j'ai appris quelques trucs… je pense🤷‍♂️
              <br />
              <br />J'ai acquis une solide base en
              <i>
                <b className="purple"> Python, SQL et React. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt incluent la création de nouvelles technologies et produits web &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> 
              </i>
              <br />
              <br />
              Chaque fois que c'est possible, j'applique également ma passion pour le développement de produits avec Java ainsi que des bibliothèques et frameworks JavaScript modernes comme  <b className="purple"></b>          
              &nbsp; comme
              <i>
                <b className="purple"> React.js, et avec Python.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
            N'hésitez pas à<span className="purple"> vous connecter</span> avec moi 
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Marouane148/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/MKaidi74483"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marouane-kaidi-7a1b4021b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
