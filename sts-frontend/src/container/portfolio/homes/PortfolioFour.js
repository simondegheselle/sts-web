import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import imagesloaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import SectionTitle from "../../../components/section-title/SectionTitleOne";
import Project from "../../../components/portfolio/PortfolioItemFour";
import { useProjects } from '../../../project_context';
import _ from 'lodash'
const PortfolioFour = () => {
    const [activeServiceType, setActiveServiceType] = useState(-1);
    const { state } = useProjects()

    const projects = state.projects;

    return (
        <div className="bk-portfolio-with-caption-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--1 bk-masonry-wrapper basic-thine-line">
            {!_.isEmpty(projects) && <Container>
                <div className="flex mb-10">
                    <div className="flex-initial">
                        <SectionTitle
                            heading="Ontdek onze projecten"
                        />
                    </div>

                    <div className='flex-1'>
                        <div
                            className="masonry-button-active masonry-button--2 text-left text-lg-right mt_md--40 mt_sm--40">
                            <button data-filter="*" onClick={() => setActiveServiceType(-1)}>
                                <span className="filter-text">All</span>
                                <span className="filter-counter">{projects.length}</span>
                            </button>

                            {state.service_types?.filter(category => projects.filter(project => category.id == project.service_type).length > 0).map((category, indx) => (
                                <button key={indx} data-filter={`.${category.name.toLowerCase()}`} onClick={() => setActiveServiceType(category.id)}>
                                    <span className="filter-text">{category.name}</span>
                                    <span className="filter-counter">{projects.filter(project => category.id == project.service_type).length || ""}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {projects && projects.filter(project => activeServiceType == -1 || activeServiceType == project.service_type).map(project => (
                            <Project
                                project={project}
                                thumb={`http://localhost:8055/assets/${project.background}`}
                            />
                    ))}
                </div>
            </Container>}
        </div>
    );
};

export default PortfolioFour;
