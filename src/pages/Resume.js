import React from "react";
import { Col, Row, Container } from "../components/Grid";
import "./styles.css"

function Resume() {
    return (
        <Container>
            <Row name="">
                <Col size="md-12">
                    <iframe src="https://docs.google.com/gview?url=https://github.com/Ctucker9233/resume/raw/master/Profile.pdf&embedded=true" frameborder="0" title="resume"></iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;