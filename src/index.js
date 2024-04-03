import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Jeśli używasz styli CSS, zaimportuj je tutaj
import Lessons from './02_components/Lessons.jsx'

React.createElement('div', null, 'Simple div with');
React.createElement('input', {className: 'just'});

ReactDOM.render(<Lessons/>, document.getElementById('root'));
