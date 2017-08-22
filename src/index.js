import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MainComponent from 'Components/MainComponent';
require('Utils/vendor');


ReactDOM.render(<MainComponent />, document.getElementById('root'));
registerServiceWorker();
