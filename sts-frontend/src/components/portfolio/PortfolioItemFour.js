import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItemFour = ({ className, project, thumb }) => {
    return (
        <div className='flex-col  h-full' ><div className={`portfolio with-caption w-full hover-image-zoom ${className}`}>
            <div className="thumb mb--20 w-full h-full">
                <Link to={`/portfolio-detail/${project.id}`}>
                    <img className="object-cover w-full h-full " src={thumb} alt={project.title} />
                </Link>
                <Link className="port-plus-view" to={`/portfolio-detail/${project.id}`}>&nbsp;</Link>
            </div>

        </div>
            <div className="caption-bottom text-left ">
                <div className="info">
                    <h5 className="heading heading-h5">
                        <Link to={`/portfolio-detail/${project.id}`}>{project.title}</Link>
                    </h5>
                    <p className="bk_pra">{project.category}</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItemFour;
