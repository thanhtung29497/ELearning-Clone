import React = require("react");
import utils = require("../../../utils");
import { Link } from "react-router-dom";
import { INavigation, INavigationGroup, INavigationSection, INavigationItem, INavigationLink } from "./";

/**
 * Manages links by path, include SideBarGroup, SideBarItem, SideBarSection
 * @param onSwitch: function to be called when expand/collapse
 * @param expand: Specify if Sidebar is expanded or collapsed
 * @param width: Width of Sidebar
 * @param avatar: Avatar on top of Sidebar
 * @param groups: Information about Links and Display of groups, items and sections
 * @param path: Default path when initialize
 */
export class NavigationSideBar extends React.Component<INavigation, { expand: boolean, path?: INavigationLink }> {

    constructor(props: INavigation) {
        super(props);
        this.state = {
            expand: this.props.expand !== undefined ? this.props.expand : true,
            path: this.props.path,
        }
    }

    componentWillReceiveProps(nextProps: INavigation) {
        this.setState({
            path: nextProps.path,
            expand: nextProps.expand !== undefined ? nextProps.expand : this.state.expand,
        })
    }

    /**
     * expand/collapse
     */
    switch() {
        this.props.onSwitch && this.props.onSwitch();
        this.setState({
            expand: !this.state.expand,
        })
    }

    render() {
        let expand = this.state.expand;
        let path = this.state.path;
        return <div className={"side-bar" + (expand ? "" : " collapse")} style={{ width: expand && this.props.width }}>
            <div className="avatar">
                {this.props.avatar}
                <SideBarSwitchButton onClick={this.switch.bind(this)} type={expand ? "outdent" : "indent"} />
            </div>
            <div className="content">
                {expand ?
                    this.props.groups.map((group, index) => {
                        return <SideBarGroup {...group} key={index} active={path && (path.group === group.path)}>
                            {
                                group.items &&
                                group.items.map((item, index) => {
                                    return <SideBarItem {...item}
                                        path={group.path + "" + item.path}
                                        key={index}
                                        active={path && (path.item === item.path)}>
                                        {
                                            item.sections &&
                                            item.sections.map((section, index) => {
                                                return <SideBarSection {...section} key={index} />
                                            })}
                                    </SideBarItem>
                                })}
                        </SideBarGroup>
                    }) :
                    this.props.groups.map((group, index) => <SideBarGroupAvatar key={index} {...group} />)
                }
            </div>
        </div>
    }
}

/**
 * Display group avatar, when Sidebar is collapsed
 * @param icon, title, avatar: Info to display
 * @param path: Link
 * @param active: Specify if group is in current path of Sidebar 
 */
class SideBarGroupAvatar extends React.Component<INavigationGroup, {}> {
    render() {
        return <div className={"group-avatar" + (this.props.path ? " link" : "")}>
            {
                this.props.path ?
                    <Link to={this.props.path}>
                        <i className={"fa fa-" + this.props.icon} />
                    </Link> :
                    <i className={"fa fa-" + this.props.icon} />
            }
        </div>
    }
}

/**
 * 
 * @param icon, title, avatar: Info to display
 * @param path: Link
 * @param active: Specify if group is in current path of Sidebar 
 */
class SideBarGroup extends React.Component<INavigationGroup, {}> {

    render() {
        return <div className="group">
            <div className={"title" + (this.props.path ? " link" : "") + (this.props.active ? " active" : "")}>
                <div className="icon">
                    <i className={"fa fa-" + this.props.icon} />
                </div>
                {this.props.path ?
                    <Link to={this.props.path}>
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

/**
 * 
 * @param icon, title, avatar: Info to display
 * @param path: Link
 * @param active: Specify if item is in current path of Sidebar 
 */
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

        return <div className={"item" + (this.props.active ? " active" : "")} >
            <Link to={this.props.path}>
                <div className="header">
                    {
                        icon &&
                        <div className="icon">
                            <i className={"fa fa-" + icon} />
                        </div>
                    }
                    <span className="title">{title}</span>
                    {
                        this.props.children &&
                        <div onClick={this.expandOrHide.bind(this)}
                            className={"arrow" + (this.state.expand ? " rotate" : "")}>
                            <i className="fa fa-angle-right" />
                        </div>
                    }
                </div>
            </Link>
            {
                subItems &&
                <div className={"sub-items" + (this.state.expand ? " expand" : "")}>
                    {subItems}
                </div>
            }
        </div>
    }
}

/**
 * 
 * @param icon, title, avatar, badges: Info to display
 * @param path: Link
 * @param active: Specify if section is in current path of Sidebar 
 */
class SideBarSection extends React.Component<INavigationSection, {}> {
    render() {
        let icon = this.props.icon ? this.props.icon : "circle";
        return <div className="section">
            <span className="icon">
                {
                    this.props.icon &&
                    <i className={"fa fa-" + icon} />
                }
            </span>
            <div className="title">{this.props.title}</div>
            {
                this.props.badges &&
                <img src={this.props.badges} alt="" />
            }
        </div>
    }
}

const SideBarSwitchButton = (props: { onClick?: () => void, type: string }) => {
    return <div className="switch-button" onClick={props.onClick}>
        <i className={"fa fa-" + props.type} />
    </div>
}