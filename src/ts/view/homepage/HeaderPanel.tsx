import React = require("react");

export class HeaderPanel extends React.Component<{ scrollTopToChange?: number }, { optionalClass: string }> {

    constructor() {
        super();
        this.state = {
            optionalClass: ""
        };
        window.onscroll = this.onscroll.bind(this);
    }

    onscroll() {
        if (this.props.scrollTopToChange === undefined) return;
        if (document.body.getBoundingClientRect().top < this.props.scrollTopToChange) {
            this.setState({
                optionalClass: "fixed",
            })
        } else {
            this.setState({
                optionalClass: "",
            })
        }
    }


    render() {
        return <header className={"header-panel " + this.state.optionalClass}>
            {this.props.children}
        </header >
    }
}