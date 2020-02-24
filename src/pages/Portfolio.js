import React from "react";
import { Col, Row, Container } from "../components/Grid";
import PortfolioCard from "../components/PortfolioCard"
import "./styles.css"
import shotcaller from "../images/Flaming-shots-iStock.jpg"
import dungeonbud from "../images/rpg2.jpg"
import weatherforecast from "../images/ca_0126NID_Thunderstorm_Melbourne_online.jpg"
import dailyplanner from "../images/ttp-disc-week-completed.jpg"
import codingquiz from "../images/Why-You-Love-Online-Quizzes-825x500.jpg"
import password from "../images/591665-how-to-create-a-random-password-generator.jpg"

function Portfolio() {

    return (
        <Container fluid>
            <Row className="portfolio">
                <Col size="md-6">
                    <PortfolioCard href="https://taylornburrows.github.io/shot_caller/" src={shotcaller} alt="Shot Caller" title="Shot Caller" />
                </Col>
                <Col size="md-6">
                    <PortfolioCard href="https://dungeon-bud.herokuapp.com/" src={dungeonbud} alt="Dungeon Bud" title="Dungeon Bud" />
                </Col>
            </Row>
            <Row className="portfolio">
                <Col size="md-6">
                    <PortfolioCard href="https://ctucker9233.github.io/Weather-Forcast/" src={weatherforecast} alt="Weather Forecast" title="Weather Forecast" />
                </Col>
                <Col size="md-6">
                    <PortfolioCard href="https://ctucker9233.github.io/Daily-Planner/" src={dailyplanner} alt="Daily Planner" title="Daily Planner" />
                </Col>
            </Row>
            <Row className="portfolio">
                <Col size="md-6">
                    <PortfolioCard href="https://ctucker9233.github.io/Coding-Quiz/" src={codingquiz} alt="Coding Quiz" title="Coding Quiz" />
                </Col>
                <Col size="md-6">
                    <PortfolioCard href="https://ctucker9233.github.io/Password-Generator-JS/" src={password} alt="Password Generator" title="Password Generator" />
                </Col>
            </Row>
        </Container>
    );
}


export default Portfolio;