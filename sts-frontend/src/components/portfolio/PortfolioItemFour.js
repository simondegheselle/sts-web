import React from 'react';

const PortfolioItemFour = ({className, title, thumb, category}) => {
    return (
        <div className={`portfolio with-caption no--padding h-full w-full hover-image-zoom ${className}`}>
            <div className="thumb mb--20 w-full h-full">
                <a href={`${process.env.PUBLIC_URL + '/portfolio-detail/1'}`}>
                    <img className="object-cover w-full h-full " src={thumb} alt={title}/>
                </a>
                <a className="port-plus-view" href={`${process.env.PUBLIC_URL + '/portfolio-detail/1'}`}>&nbsp;</a>
            </div>
            <div className="caption-bottom text-left">
                <div className="info">
                    <h5 className="heading heading-h5">
                        <a href={`${process.env.PUBLIC_URL + '/portfolio-detail/1'}`}>{title}</a>
                    </h5>
                    <p className="bk_pra">{category}</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItemFour;
