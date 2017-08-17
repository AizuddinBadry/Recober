import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MainComponent from 'Components/MainComponent';
import 'Assets/css/app.css';
import 'Assets/css/foundation.css';
require('Utils/Foundation')

ReactDOM.render(<MainComponent />, document.getElementById('root'));
registerServiceWorker();
