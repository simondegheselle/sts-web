import React, {useEffect} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Error from "./pages/others/Error";
import ScrollToTop from "./helper/scrollToTop";
import PortfolioDetailsLeft from "./pages/portfolios/PortfolioDetailsLeft";
import Home from "./pages/homes/Home";

import { getProjects, getServiceTypes, getFiles, getFilesIds, getProjectFiles } from './api';
import { useProjects } from './project_context';

const App = () => {
    const {dispatch} = useProjects()

    useEffect(() => {
        getProjects().then((projects) =>  {
            console.log(projects)
            dispatch({type: 'GET_PROJECTS', data: projects.data})
        })

        getProjectFiles().then((project_files) =>  {
            dispatch({type: 'GET_PROJECTS_FILES', data: project_files.data})
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
    }, [])
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