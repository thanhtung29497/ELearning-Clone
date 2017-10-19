import React = require("react");

export const Introduction = (props: { children?: Element, text: string, smallText?: string }) => {
    return <div className="introduction">
        <h1 className="large">
            {props.text}
        </h1>
        <h2 className="small">
            {props.smallText}
        </h2>
        {props.children}
    </div>
}

export class CoverPanel extends React.Component<{}, {}> {
    render() {
        return <div className="cover-photo-panel">
            {this.props.children}
        </div>
    }
}