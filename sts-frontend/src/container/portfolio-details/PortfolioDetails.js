import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import portDetailsData from "../../data/portfolio-details";
import { useProjects } from '../../project_context';
import { find_file_by_id } from '../../actions'
const PortfolioDetails = ({ position, id }) => {
    const { state } = useProjects()
    let project = {}
    if (state.projects) {
        project = state.projects.filter(project => project.id == id)[0]
    }
    console.log(state)
    return (

        <div className="brook-portfolio-details bg_color--1 mt_sm--50">

            <Container className="pt--100">
                <div className=" mb-8">
                    <a href={`${process.env.PUBLIC_URL + "/"}`}>
                        <button className="bg-gray-50 active:bg-green-700 p-2 rounded-sm text-dark">
                        Terug
                    </button>
                    </a>
                </div>
                {project && <Row className="pt_md--5 pt_sm--5 pb--80">
                    <Col lg={4} className={`mt_md--40 mt_sm--40 order-1 order-lg-${position === "right" ? 1 : 0}`}>
                        <div className="portfolio-left bk-portfolio-details">
                            <div className="portfolio-main-info">
                                <h3 className="heading heading-h3 line-height-1-42">{project.title}</h3>

                                <div
                                    className="portfolio-content mt--75 mb--75 mt_md--40 mb_md--40 mt_sm--40 mb_sm--40">
                                    <h6 className="heading heading-h6">OVER HET PROJECT</h6>
                                    <div className="desc mt--20">
                                        <p className="bk_pra" dangerouslySetInnerHTML={{ __html: project.description }} />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </Col>

                    <Col lg={8}
                    >
                        <div className="portfolio-right portfolio-details-gallery mt--n40">
                            {state.files && project.photo_gallery && project.photo_gallery.map((file_id, index) => {
                                const file = find_file_by_id(state.files, file_id)
                                console.log(`http://188.166.41.81:8055/assets/${file.id}`)
                                return (
                                    <div className="text-right m-16 ">
                                        <img className="rounded-sm shadow-md" src={`http://localhost:8055/assets/${file.id}`} />
                                        <div className="m-4">
                                            <div className="text-lg font-semibold		">{file.title}</div>
                                            <div className="text-base	">{file.description}</div>
                                        </div>
                                    </div>
                                    // return (
                                    // <div className="portfolio-image mt--40" key={index}>
                                    //     <img
                                    //         src={require('../../assets/img/portfolio/details/' + thumb)}
                                    //         alt={portDetailsData.title}
                                    //     />
                                    // </div>
                                )
                            })}
                        </div>
                    </Col>
                </Row>}

                <Row>
                    <Col lg={12}>
                        <div className="portfolio-nav-list pt--50 pb--150 pb_md--80 pb_sm--60 pt_md--5 pt_sm--5">
                            <div className="portfolio-page prev">
                                <div className="inner">
                                    <a href={`${process.env.PUBLIC_URL + "/"}`}>
                                        <p>Vorige</p>
                                        <h3 className="heading heading-h3">Titel van het <br /> vorige project</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-page next mt_sm--30">
                                <div className="inner">
                                    <a href={`${process.env.PUBLIC_URL + "/"}`}>
                                        <p>Volgende</p>
                                        <h3 className="heading heading-h3">Titel volgende <br />project</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PortfolioDetails;
