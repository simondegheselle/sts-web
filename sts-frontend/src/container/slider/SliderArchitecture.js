import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SliderSwiper from "../../components/swiper";
import { heroSliderConfig } from "../../helper/heroSliderConfig";
import { useProjects } from '../../project_context';
const SliderArchitecture = () => {
    const { state } = useProjects()

    const healiner_projects = state.projects && state.projects.filter(proj => proj.headliner)
    if (healiner_projects && healiner_projects.length <= 1) {
        heroSliderConfig.autoplay = false
    }
    const settings = {
        ...heroSliderConfig,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
                return `<span class="${className}">0${index + 1}</span>`
            }
        }
    }

    return (
        <div className="hero-slider hero-slider--architecture">
            {state.files && healiner_projects && <SliderSwiper settings={settings}>
                {healiner_projects.map(slide => (<div className="swiper-slide" key={slide.id}>
                    <div
                        className="slide-inner slide-bg-image"
                        style={{ backgroundImage: `url(${'http://104.248.86.83:8055/assets/' + slide.background})` }}
                    >
                        <Container fluid className="h-100">
                            <Row className="h-100 align-items-center">
                                <Col lg={{ span: 6, offset: 3 }} xl={{ span: 4, offset: 6 }}>
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2 dangerouslySetInnerHTML={{ __html: slide.title }} />
                                        </div>

                                        <div data-swiper-parallax="450" className="view-more-btn">
                                            <Link to={`/portfolio-detail/${slide.id}`}>
                                                <span>Bekijk het project</span>
                                                <span className="btn-arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>))}
            </SliderSwiper>}
        </div >
    );
};


export default SliderArchitecture;
