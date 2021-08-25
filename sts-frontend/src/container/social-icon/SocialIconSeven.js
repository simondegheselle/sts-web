import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import socialIcons from '../../data/socials';
import SocialIconItem from "../../components/social-icon";

const SocialIconSeven = () => {
    return (
        <div className={"brook-social-icon bg_color--2 ptb--80 ptb-sm--60"}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <ul className="social-icon style-solid-rounded-icon icon-size-medium text-center">
                            {socialIcons.map(icon=>(
                                <SocialIconItem
                                    key={icon.id}
                                    type={'icon'}
                                    socialMedia={icon.media}
                                    username={icon.username}
                                    className={"link"}
                                />
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SocialIconSeven;
