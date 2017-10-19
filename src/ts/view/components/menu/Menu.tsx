import React = require("react");
import utils = require("../../../utils");

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

export const MenuItem = (props: { title: string, onClick?: () => void }) => {
    return <span onClick={props.onClick}>
        {props.title}
    </span>
}