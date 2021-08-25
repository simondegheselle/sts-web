import WOW from "wowjs";
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Error from "./pages/others/Error";
import ScrollToTop from "./helper/scrollToTop";
import PortfolioDetailsLeft from "./pages/portfolios/PortfolioDetailsLeft";
import Home from "./pages/homes/Home";
import { useProjects } from './project_context';

import { getProjects, getFiles, getServiceTypes, getFilesIds } from './api';

const App = () => {
    const {dispatch} = useProjects()

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
        getProjects().then((projects) =>  {
            dispatch({type: 'GET_PROJECTS', data: projects.data})
        })
        getServiceTypes().then((service_types) => {
            dispatch({type: 'GET_SERVICE_TYPES', data: service_types.data})
        })
        getFiles().then((files) => {
            dispatch({type: 'GET_FILES',  data: files.data})
        })
        getFilesIds().then((files) => {
            console.log(files)
            dispatch({type: 'GET_FILES_IDS',  data: files.data})
        })
    }, []);
    return (
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route
                            exact
                            path={`${process.env.PUBLIC_URL + '/'}`}
                            component={Home}
                        />
                  
                        <Route
                            path={`${process.env.PUBLIC_URL}/portfolio-detail/:id`}
                            component={PortfolioDetailsLeft}
                        />
                        <Route exact component={Error}/>
                    </Switch>
                </ScrollToTop>
            </Router>
    );
};

export default App;