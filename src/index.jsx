import React from 'react';
import { render } from 'react-dom';
import {initTypeConfigMap} from './controler/Configuration'

import App from './App';

const div = document.createElement('div');
document.body.appendChild(div);

render(<App />, div);
