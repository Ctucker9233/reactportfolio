import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Header from "../components/Header/index"
import profileimg from "../images/profile-pic.jpg"
import "./styles.css"

function About() {

    return (
        <Container fluid>
            <Row name="about">
                <Col size="md-12">
                    <Header header="About Me" />
                </Col>
                <Col size="md-4">
                    <img src={profileimg} className="img-fluid profile" alt="Courtney Tucker" />
                </Col>
                <Col size="md-8">
                    <p>Hey! Nice to meet you. My name is Courtney Tucker. I am a total tech geek. I love
                            everything tech, especially computers.</p>
                    <p>I have years of self-taught HTML and CSS under my belt. I have also worked
                        extensively with the Magento e-commerce platform. This site contains some of my
                            favorite projects. Take a look around!</p>
                    <p>I also enjoy other technical pursuits such as video editing which I have been doing
                            for the last 5 years.</p>
                    <p>Check out my <a href='https://www.linkedin.com/in/courtt3d/'>LinkedIn Profile</a> and my github repo.</p>
                </Col>
            </Row>
        </Container>
    );
}


export default About;