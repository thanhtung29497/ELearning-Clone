/// <reference path="../../../../../typings/index.d.ts" /> 
import React = require("react");

export class NavigationBar extends React.Component<{ className?: string }, {}> {
    render() {
        return <header>
            <nav className={"nav-bar " + this.props.className}>
                {this.props.children}
            </nav>
        </header>
    }
}

export const NavigationItem = (props: { title: string, onClick?: () => void, active?: boolean }) => {
    let active = props.active;
    return <div onClick={props.onClick} className="nav-item">
        <div className={"nav-link" + (active ? " active" : "")}>
            {props.title}
        </div>
    </div >
}

export const NavigationRightSection = (props: { children?: Element }) => {
    return <div className="right-align">
        {props.children}
    </div>
}