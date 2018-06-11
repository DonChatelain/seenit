import React from 'react';
import ReactDOM from 'react-dom';

import Main from './src/components/Main';

const mainElement = document.createElement('main');
document.body.appendChild(mainElement);

ReactDOM.render(<Main/>, mainElement);
