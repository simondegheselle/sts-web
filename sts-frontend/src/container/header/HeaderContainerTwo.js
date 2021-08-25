import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {isSticky} from '../../helper/isSticky';

const HeaderContainerTwo = ({children, classes}) => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        }
    });

    return (
        <header
            className={`br_header header-default is-sticky light-logo--version header-fixed-width dark-version header-mega-menu clearfix ${classes}`}>
            <Container fluid={true}>
                <Row>
                    <Col xs={12}>
                        <div className="header__wrapper mr-0">
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default HeaderContainerTwo;