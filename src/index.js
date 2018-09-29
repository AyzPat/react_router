import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import One from './One/One';
import One_1 from './One_1/One_1';

ReactDOM.render(<Router>
    <div>
    <Route path="/" component={App} exact/>
    <Route path="/one" component={One} exact />
    <Switch>
    <Route path="/:id" component={One} />
    </Switch>
  
    </div>
    </Router>
    
    
    , document.getElementById('root'));
registerServiceWorker();
