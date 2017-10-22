import React = require("react");
import utils = require("../../../utils");
import { Link } from "react-router-dom";
import { INavigation, INavigationGroup, INavigationSection, INavigationItem } from "./";

export class NavigationSideBar extends React.Component<INavigation, { expand: boolean }> {

    constructor(props: INavigation) {
        super(props);
        this.state = {
            expand: this.props.expand !== undefined ? this.props.expand : true
        }
    }

    switch() {
        this.props.onSwitch && this.props.onSwitch();
        this.setState({
            expand: !this.state.expand,
        })
    }

    render() {
        let expand = this.state.expand;
        return <div className={"side-bar" + (expand ? "" : " collapse")} style={{ width: expand && this.props.width }}>
            <div className="avatar">
                {this.props.avatar}
                <SideBarSwitchButton onClick={this.switch.bind(this)} type={expand ? "outdent" : "indent"} />
            </div>
            <div className="content">
                {expand ?
                    this.props.groups.map(group => {
                        return <SideBarGroup {...group}>
                            {group.items && group.items.map(item => {
                                return <SideBarItem {...item}>
                                    {item.sections && item.sections.map(section => {
                                        return <SideBarSection {...section} />
                                    })}
                                </SideBarItem>
                            })}
                        </SideBarGroup>
                    }) :
                    this.props.groups.map(group => <SideBarGroupAvatar {...group} />)
                }
            </div>
        </div>
    }
}

class SideBarGroupAvatar extends React.Component<INavigationGroup, {}> {
    render() {
        return <div className={"group-avatar" + (this.props.link ? " link" : "")}>
            {
                this.props.link ?
                    <Link to={this.props.link}>
                        <i className={"fa fa-" + this.props.icon} />
                    </Link> :
                    <i className={"fa fa-" + this.props.icon} />
            }
        </div>
    }
}

class SideBarGroup extends React.Component<INavigationGroup, {}> {
    render() {
        return <div className="group">
            <div className={"title" + (this.props.link ? " link" : "")}>
                <div className="icon">
                    <i className={"fa fa-" + this.props.icon} />
                </div>
                {this.props.link ?
                    <Link to={this.props.link}>
                        {this.props.title}
                    </Link> :
                    <span>
                        {this.props.title}
                    </span>
                }
            </div>
            {this.props.children}
        </div>
    }
}

class SideBarItem extends React.Component<INavigationItem, { expand: boolean }> {

    constructor() {
        super();
        this.state = {
            expand: false
        }
    }

    expandOrHide() {
        this.setState({
            expand: !this.state.expand,
        })
    }

    render() {

        const { icon, title } = this.props;
        let subItems;
        if (this.props.children) {
            subItems = utils.toArray(this.props.children);
        }

        return <div className="item">
            <div className="header">
                {icon && <div className="icon">
                    <i className={"fa fa-" + icon} />
                </div>}
                <span className="title">{title}</span>
                {this.props.children && <div onClick={this.expandOrHide.bind(this)}
                    className={"arrow" + (this.state.expand ? " rotate" : "")}>
                    <i className="fa fa-angle-right" />
                </div>}
            </div>
            {subItems && <div className={"sub-items" + (this.state.expand ? " expand" : "")}>
                {subItems}
            </div>}
        </div>
    }
}

class SideBarSection extends React.Component<INavigationSection, {}> {
    render() {
        let icon = this.props.icon ? this.props.icon : "circle";
        return <div className="section">
            <span className="icon">
                {this.props.icon && <i className={"fa fa-" + icon} />}
            </span>
            <div className="title">{this.props.title}</div>
            {this.props.badget && <img src={this.props.badget} alt="" />}
        </div>
    }
}

const SideBarSwitchButton = (props: { onClick?: () => void, type: string }) => {
    return <div className="switch-button" onClick={props.onClick}>
        <i className={"fa fa-" + props.type} />
    </div>
}