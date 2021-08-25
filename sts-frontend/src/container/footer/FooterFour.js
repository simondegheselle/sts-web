import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col} from 'react-bootstrap';
import Widget from "../../components/widget";
import Copyright from "../../components/footer/Copyright";

const FooterFour = () => {
    return (
        <footer
            className="page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30">
            <div className="bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20">
                <div class="flex flex-wrap">
                    <div className="flex-1 w-24 min-w-full md:min-w-0">
                        <h2 className="heading heading-h2 text-white line-height-1-39">Van start gaan met een <br/> nieuw project?</h2>
                    </div>

                    <div className="flex-initial">
                        <div className="bk-footer-widget menu--contact mt_md--30 mt_sm--30">
                        <div className="flex">
                     

                        <div className='flex-1'>
                            <Widget
                                wrapClasses="text-var--2 menu--about"
                                title="Contact"
                            >
                                <div className="footer-address">
                                    <div className="bk-hover">
                                        <p>Rechtstraat 36    <br/>    
9042 Desteldonk </p>
                                        <p><a href={process.env.PUBLIC_URL + "/"}>info@sts-constructies.be</a></p>
                                        <p><a href={process.env.PUBLIC_URL + "/"}>+32  (0)477.478. 327
</a></p>
                                    </div>
                                  
                                </div>
                            </Widget>
                        </div>

                     
                    </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright ptb--50">
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <div className="copyright-left text-md-left text-center">
                            <ul className="bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap">
                                <li><Link to={process.env.PUBLIC_URL + "/over-ons"}>Over ons</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/projecten"}>Projecten</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contacteer ons</Link></li>
                            </ul>
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className="copyright-right text-md-right text-center">
                            <Copyright/>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default FooterFour;