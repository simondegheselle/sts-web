 import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Input from "../../components/input";

const ContactOne = () => {
    // TODO on submit create item in test
    return (
        <div className="bk-contact-area section-pb-xl bg_color--1 ptb--120 ">
            <Container>
                <Row>
                    <Col xs={12} lg={3}>
                        <div className="address-inner">
                            <div className="address wow move-up">
                                <h3 className="heading">Ons atelier</h3>
                                <p>Rechtstraat 36, 9042 Desteldonk</p>
                            </div>

                            <div className="address mt--60 mb--60 wow move-up">
                                <h3 className="heading">Email ons</h3>
                                <p><a href="mailto:info@sts-constructies.be">info@sts-constructies.be</a></p>
                                <p><a href="tel:+32 (0)477478327">+32 (0)477 47 83 27</a></p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} lg={9} xl={{span: 8, offset: 1}} className="mt_md--40 mt_sm--40">
                        <div className="contact-form">
                            <form action="/" className="form-style--1 wow move-up">
                                <div className="row">
                                    <Col lg={6}>
                                        <div className="input-box">
                                            <span className="form-icon fa fa-user-o"/>
                                            <Input
                                                type={"text"}
                                                name={"naam"}
                                                placeholder={"Naam*"}
                                                required={true}
                                            />
                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="input-box">
                                            <span className="form-icon fa fa-envelope-o"/>
                                            <Input
                                                type={"email"}
                                                name={"email"}
                                                placeholder={"Email*"}
                                                required={true}
                                            />
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <div className="input-box">
                                            <span className="form-icon fa fa-phone"/>
                                            <Input
                                                type={"text"}
                                                name={"gsm"}
                                                placeholder={"Gsm nummer *"}
                                                required={true}
                                            />
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <div className="input-box">
                                            <Input
                                                type={"textarea"}
                                                name={"bericht"}
                                                placeholder={"Uw bericht*"}
                                                required={true}
                                            />
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <div className="form-action">
                                            <div className="form-description">
                                            </div>
                                            <div className="form-submit">
                                                <Input
                                                    type={"submit"}
                                                    value={"Verzend"}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactOne;
