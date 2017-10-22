import React = require("react");
import { Link } from "react-router-dom";

export const Tag = (props: { title: string, link?: string, icon?: string }) => {
    return <div className="tag">
        {props.icon && <i className={"fa fa-" + props.icon}></i>}
        {
            props.link ?
                <Link to={props.link} className="tag-title">
                    {props.title}
                </Link> :
                <span className="tag-title">
                    {props.title}
                </span>
        }
    </div>
}