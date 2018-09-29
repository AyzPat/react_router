import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import One_1 from '../One_1/One_1';
import { Route,Switch } from "react-router-dom";

class One extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>
                    One
                </div>
                <Link to='/one/123'>123</Link>
                <Switch>
    {/* <Route exact path='/one' component={One}/> */}
    <Route path='/one/:number' component={One_1}/>
  </Switch>
            </div>
        );
    }
}

export default One;