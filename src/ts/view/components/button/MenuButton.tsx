import React = require("react");
import { Menu } from "../menu/Menu";

/**
 * Button to open/close Menu
 */

export class MenuButton extends React.Component<{}, { open: boolean }> {

    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    openOrClose() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        let buttonClass = this.state.open ? " open" : "";
        return <div>
            <div className={"menu-button" + buttonClass} onClick={this.openOrClose.bind(this)}>
                <div className="button-bar" />
                <div className="button-bar" />
                <div className="button-bar" />
            </div>
            <Menu isOpen={this.state.open} onClose={this.openOrClose.bind(this)} >
                {this.props.children}
            </Menu>
        </div>
    }
}