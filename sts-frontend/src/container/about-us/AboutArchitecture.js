import React from 'react';
import {Row, Col} from "react-bootstrap";
import thumb from "../../assets/img/14369636.jpeg"
import { useProjects } from '../../project_context';
const AboutArchitecture = () => {
    const projects = useProjects()
    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 ptb--100 ptb-md--80 ptb-sm--60  bg_color--1">
                <div>
                    <div className="pl--320 pr--80 pl_lp--80 pl_lg--50 pr_lg--20 pl_md--50 pr_md--20 pl_sm--30 pr_sm--20">
                        <div className="architecture-story wow move-up">
                            <h6 className="heading heading-h6 body-color">ONS VERHAAL</h6>
                            <div className="bk-separator--25"/>

                            <h2 className="heading heading-h2 line-height-1-25">
                                Uw constructie-atelier voor projecten met <span className="yellow-color">metaal</span>.
                            </h2>

                            <div className="bk-separator--45"/>

                            <h5 className="heading heading-h5 line-height-1-62">Onze activiteiten situeren zich zowel  in maatwerk oplossingen voor uitdagingen “in en rond de woning”,
als in de realisatie van projecten bij onze klanten in de industrie
                            </h5>
                            <div className="bk-separator--20"/>
                            <p className="bk_pra">{projects.state.test} Onze opdrachten zijn zeer divers van aard en zijn steeds maatwerk, volgens uw of ons ontwerp.
Onze aanpak is hierbij allesomvattend.
Wij beheren het ontwerp, de constructie en de uiteindelijke installatie,
zodat u als klant slechts één aanspreekpunt behoeft..</p>
                            <div className="bk-separator--20"/>
                            <p className="bk_pra">STS Constructies  is gevestigd in de rand om Gent en is aktief zowel in Oost- als in West-Vlaanderen.

Naast B2B projecten, kennen wij als klanten onder andere organisatoren van events,
interieurontwerpers, proces-engineers, architecten, alsook particulieren.
 ..</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mt_md--40 mt_sm--40">
                        <div className="architecture-story">
                            <div className="thumb wow move-up architecture-story-image">
                                <img max-width="auto" src={thumb} alt="architect"/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AboutArchitecture;
