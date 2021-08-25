import React, {Fragment, useEffect} from 'react';
import {Helmet} from "react-helmet";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderFour";
import SliderArchitecture from "../../container/slider/SliderArchitecture";
import About from "../../container/about-us/AboutArchitecture";
import Services from "../../container/service/ServiceSeven";
import LatestProject from '../../container/portfolio/homes/PortfolioFour'
import ContactArea from "../../container/contact/ContactOne";
import Footer from "../../container/footer/FooterFour";

const Home = () => {

    return (
        <Fragment>
            <Helmet>
                <title>STS - Constructies</title>
            </Helmet>
            <LayoutDefault className="template-color-4 template-font-1 bg_color--1" revealFooter={false}>
                <Header/>
                <SliderArchitecture/>
                <About/>
                <Services/>
                <LatestProject/>
                <ContactArea/>
            </LayoutDefault>
            <Footer/>
        </Fragment>
    );
};

export default Home;