/// <reference path="../../../../../typings/index.d.ts" /> 
import React = require("react");
import utils = require("../../../utils");
import { Link } from "react-router-dom";

/**
 * Manage links by keys (index of items in array)
 * @param className: Custom CSS
 * @param onChangeKey: function to be called when user click on an item
 * @param defaultKey: default index of item to be chosen
 */

export class NavigationBar extends React.Component<{
    className?: string,
    onChangeKey?: (key: number) => void,
    defaultKey?: number;
}, {
        key: number,
    }> {

    constructor() {
        super();
        this.state = {
            key: 0
        }
        this.setKey.bind(this);
    }

    componentWillReceiveProps(nextProps: { defaultKey?: number }) {
        if (nextProps.defaultKey) {
            this.setState({
                key: nextProps.defaultKey
            })
        }
    }

    setKey(key: number) {
        this.setState({
            key: key,
        });
        this.props.onChangeKey && this.props.onChangeKey(key);
    }

    render() {
        let optionalClass = this.props.className ? this.props.className : "default";
        let items = utils.toArray(this.props.children) as Element[];
        return <nav className={"nav-bar " + optionalClass}>
            {items.map((item, index) => {
                return <div onClick={() => this.setKey(index)} key={index}
                    className={"nav-wrapper " + (this.state.key === index ? "active" : "")}>
                    {item}
                </div >
            })}
        </nav>
    }
}

export const NavigationItem = (props: { title: string, onClick?: () => void, path?: string }) => {
    return <div onClick={props.onClick} className="nav-item">
        {props.path ?
            <Link to={props.path}>
                {props.title}
            </Link> :
            <span>
                {props.title}
            </span>}
    </div>

}

export const NavigationRightSection = (props: { children?: Element }) => {
    return <div className="right-align">
        {props.children}
    </div>
}