import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useProjects } from '../../project_context';
import { find_file_by_id } from '../../actions'
import { instanceOf } from 'prop-types';
import { Link } from 'react-router-dom';
const PortfolioDetails = ({ position, id }) => {
    const { state } = useProjects()
    let project = {}
    let prevProject = undefined
    let nextProject = undefined
    if (state.projects) {
        project = state.projects.filter(project => project.id == id)[0]
        const projectIndex = state.projects.findIndex(project => project.id == id)
        prevProject = state.projects[(projectIndex - 1) % state.projects.length]
        nextProject = state.projects[(projectIndex + 1) % state.projects.length]
    }

    const project_files = state.project_files
    return (

        <div className="brook-portfolio-details bg_color--1 mt_sm--50">

            <Container className="pt--100">

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
                                const direct_file_id = project_files?.find(item => item.id == file_id)?.directus_files_id
                                const file = state.files?.find(item => item.id == direct_file_id)

                                return (
                                    <div className="text-right m-16 ">
                                        <img className="rounded-sm shadow-md" src={`http://104.248.86.83:8055/assets/${direct_file_id}`} />
                                        <div className="m-4">
                                            <div className="text-lg font-semibold		">{file?.title}</div>
                                            <div className="text-base	">{file?.description}</div>
                                        </div>
                                    </div>)
                            })}
                        </div>
                    </Col>
                </Row>}



                <Row>
                    <Col lg={12}>
                        <div className="portfolio-nav-list pt--50 pb--150 pb_md--80 pb_sm--60 pt_md--5 pt_sm--5">
                            <div className="portfolio-page prev">

                                <div className="inner">
                                    {prevProject &&
                                        <Link to={`/portfolio-detail/${prevProject.id}`}>
                                            <p>Vorige</p>
                                            <h3 className="heading heading-h3">{prevProject.title}</h3>
                                        </Link>
                                    }
                                </div>
                            </div>
                            <div className="portfolio-page next mt_sm--30">
                                <div className="inner">
                                    {nextProject && <Link to={`/portfolio-detail/${nextProject.id}`}>
                                        <p>Volgende</p>
                                        <h3 className="heading heading-h3">{nextProject.title}</h3>
                                    </Link>
                                    }
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
