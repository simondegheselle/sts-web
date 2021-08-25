import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GradationItem from "../../components/gradation";

const ServiceSeven = () => {
    return (
        <div className="brook-gradation-area pb--150 pb-md--80 pb-sm--60 bg_color--1 basic-thine-line">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="bk-title--default text-center">
                            <h5 className="heading heading-h5 theme-color">Project van start to einde</h5>
                            <div className="bk-separator--30"/>
                            <h3 className="heading heading-h3">Hoe gaan we te werk</h3>
                        </div>

                        <div className="bk-gradation mt--30 mt_sm--5">
                            {contents.map(content => (
                                <GradationItem
                                    key={content.id}
                                    count={content.id}
                                    heading={content.heading}
                                    content={content.text}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const contents = [
    {
        id: 1,
        heading: "Overleg",
        text: "Duis tincidunt diam leo, non aliquet velit ultricies vitae. ante at, scelerisque lectus."
    },
    {
        id: 2,
        heading: "Ontwerp",
        text: "Nam pulvinar arcu lacus, ut vulputate odio suscipit nec. Nullam tincidunt ."
    },
    {
        id: 2,
        heading: "Constructie",
        text: "Vivamus a augue sit amet nibh aliquam rhoncus. Nullam tincidunt elementum augue"
    },
    {
        id: 3,
        heading: "Installatie",
        text: "Vivamus non libero iaculis, sodales ante at, scelerisque lectus. Nunc a fringilla metus."
    }
]

export default ServiceSeven;
