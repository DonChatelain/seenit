import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import './global-styles.css';

const mainElement = document.createElement('main');
document.body.appendChild(mainElement);

ReactDOM.render(<Main/>, mainElement);
