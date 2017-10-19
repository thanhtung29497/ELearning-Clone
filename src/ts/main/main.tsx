import ReactDOM = require("react-dom");
import React = require("react");
import Homepage from "../view/homepage/homepage";
import { CoursePage } from "../view/coursepage/coursepage";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(<Router>
    <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/courses" component={CoursePage} />
    </div>
</Router>, document.getElementById('app'));