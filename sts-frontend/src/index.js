import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ProjectProvider } from './project_context'
ReactDOM.render(<ProjectProvider><App /></ProjectProvider>, document.getElementById('root'));
