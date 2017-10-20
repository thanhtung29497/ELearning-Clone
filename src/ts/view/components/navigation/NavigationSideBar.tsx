import React = require("react");
import utils = require("../../../utils");

export class NavigationSideBar extends React.Component<{
    title?: string;
    width?: number;
}, {}> {
    render() {
        return <div className="side-bar">
            <div className="logo"></div>
            <div className="content">

            </div>
        </div>
    }
}

export class SideBarGroup extends React.Component<{ title: string }, {}> {
    render() {
        return <div className="group">
            <div className="title"></div>
            {this.props.children}
        </div>
    }
}

export class SideBarItem extends React.Component<{ title: string, avatar?: string }, {}> {
    render() {

        const { avatar, title } = this.props;
        let subItems;
        if (this.props.children) {
            subItems = utils.toArray(this.props.children);
        }

        return <div className="item">
            <div>
                {avatar && <img src={avatar} alt="" />}
                <span className="title">{title}</span>
            </div>
            {subItems && <div className="sub-items">
                {subItems}
            </div>}
        </div>
    }
}

export class SideBarSection extends React.Component<{ title: string, avatar?: string, badget?: string }, {}> {
    render() {
        return <div className="section">
            {this.props.avatar && <img src={this.props.avatar} className="avatar" />}
            <div className="title">{this.props.title}</div>
            {this.props.badget && <img src={this.props.badget} alt="" />}
        </div>
    }
}