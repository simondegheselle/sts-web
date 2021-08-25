import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderFour";
import Footer from "../../container/footer/FooterFour";
import PortfolioDetails from "../../container/portfolio-details/PortfolioDetails";
import { useHistory, useParams } from 'react-router-dom'

const PortfolioDetailsLeft = () => {
    const { id } = useParams()
    return (
        <Fragment>
            <Helmet>
                <title>Portfolio Details Left || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>
            <LayoutDefault className="template-color-4 template-font-1 bg_color--1" revealFooter={false}>
                <PortfolioDetails id={id} position="left"/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default PortfolioDetailsLeft;
