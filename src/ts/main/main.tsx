import ReactDOM = require("react-dom");
import React = require("react");
import Homepage from "../view/homepage/homepage";
import { CoursePage } from "../view/coursepage/coursepage";
import { HashRouter as Router, Route } from "react-router-dom";

ReactDOM.render(<Router>
    <div>
        <Route exact path="/" component={Homepage} onChange={() => window.scrollTo(0, 0)} />
        <Route exact path="/courses" component={CoursePage} onChange={() => window.scrollTo(0, 0)} />
        <Route path="/courses/:value" component={CoursePage} onChange={() => window.scrollTo(0, 0)} />
    </div>
</Router>, document.getElementById('app'));