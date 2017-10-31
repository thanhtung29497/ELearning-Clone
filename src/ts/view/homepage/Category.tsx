import React = require("react");
import { Link } from "react-router-dom";

export class Categories extends React.Component<{}, {}> {
    render() {
        return <div className="categories">
            {this.props.children}
        </div>
    }
}

export const Category = (props: { path: string, title: string, onClick?: () => void, active?: boolean }) => {
    return <Link to={"/courses" + props.path}>
        <div className={"category" + (props.active ? " active" : "")} onClick={props.onClick}>
            <div className="glyphicon glyphicon-hand-right category-icon" />
            {props.title}
        </div>
    </Link>
}