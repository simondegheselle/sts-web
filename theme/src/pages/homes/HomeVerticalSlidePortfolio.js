import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";
import React, {Fragment, useState} from 'react';

import ReactPageScroller from "react-page-scroller";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderFullPage";
import PopupSearch from "../../components/popup/PopupSearch";
import PopupMenu from "../../components/header/elements/popup";
import portfolios from '../../data/portfolio/portfolio-two.json'
import PopupMobileMenu from "../../components/popup/PopupMobileMenu";
import PortfolioItem from "../../components/portfolio/PortfolioItemFullPage";

const HomeVerticalSlidePortfolio = () => {

    const [currentPage, setCurrentPage] = useState(null);

    const handlePageChange = number => {
        setCurrentPage(number)
    };

    const getPagesNumbers = () => {
        const numbersPage = [];
        for (let i = 0; i <= 2; i++) {
            numbersPage.push(
                <li key={i}>
                    <button onClick={() => handlePageChange(i)} className={i === currentPage ? 'active' : ''}>
                        <span/>
                    </button>
                </li>
            );
        }
        return [...numbersPage];
    };

    const pagesNumbers = getPagesNumbers();
    const characters = ['E', 'C', 'V'];

    return (
        <Fragment>
            <Helmet>
                <title>{`Vertical Slide Portfolio || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-21 template-font-2" revealFooter={false}>
                <Header/>
                <PopupMenu/>
                <PopupSearch/>
                <PopupMobileMenu/>
                <ReactPageScroller
                    pageOnChange={handlePageChange}
                    customPageNumber={currentPage}
                >
                    {portfolios.slice(0, 3).map(portfolio => (
                        <PortfolioItem
                            key={portfolio.id}
                            number={portfolio.id}
                            title={portfolio.title}
                            thumb={require('../../assets/img/portfolio/fullscreen/' + portfolio.thumb)}
                            category={portfolio.category}
                            character={characters[portfolio.id - 1]}
                            className="section"
                        />
                    ))}
                </ReactPageScroller>
                <div id="fp-nav" className="right">
                    <ul>
                        {pagesNumbers}
                    </ul>
                </div>
            </LayoutDefault>
        </Fragment>
    );
};

export default HomeVerticalSlidePortfolio;