import React = require("react");
import utils = require("../../../utils");
import { Link } from "react-router-dom";

export class Menu extends React.Component<{ isOpen: boolean, onClose?: () => void }, { isOpen: boolean }> {

    constructor() {
        super();
        this.state = {
            isOpen: false,
        }
    }

    componentWillReceiveProps(nextProps: { isOpen: boolean }) {
        this.setState({
            isOpen: nextProps.isOpen,
        })
    }

    close() {
        this.setState({
            isOpen: false,
        });
        this.props.onClose && this.props.onClose();
    }

    render() {
        let items = utils.toArray(this.props.children) as Element[];
        let display = this.state.isOpen ? "block" : "none";
        return <ul className="menu" style={{ display: display }}>
            {items.map((item, index) => <li key={index} className="menu-wrapper-item" onClick={this.close.bind(this)}>
                {item}
            </li>)}
        </ul>
    }
}

export const MenuItem = (props: { title: string, path?: string, onClick?: () => void }) => {
    if (props.path) {
        return <Link to={props.path}>
            <div>
                {props.title}
            </div>
        </Link>
    } else {
        return <span onClick={props.onClick}>
            {props.title}
        </span>
    }
}