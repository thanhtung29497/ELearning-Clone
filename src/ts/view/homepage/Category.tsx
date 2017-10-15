import React = require("react");

export class Categories extends React.Component<{}, {}> {
    render() {
        return <div className="categories">
            {this.props.children}
        </div>
    }
}

export const Category = (props: { name: string, onClick?: () => void, active?: boolean }) => {
    return <button className={"category" + (props.active ? " active" : "")} onClick={props.onClick}>
        {props.name}
    </button>
}