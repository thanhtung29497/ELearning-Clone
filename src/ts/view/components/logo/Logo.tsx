import React = require("react");
import { Link } from "react-router-dom";

export class Logo extends React.Component<{ className?: string }, {}> {
    render() {
        return <Link to="/">
            <div className={"logo-container " + (this.props.className ? this.props.className : "")}>
                <div className="logo" />
                <div className="logo-title">
                    <div className="large"> e-Learning </div>
                    <div className="small">Hanoi University of Science and Technology </div>
                </div>
            </div>
        </Link>
    }
}