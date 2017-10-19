import React = require("react");

export class Categories extends React.Component<{}, {}> {
    render() {
        return <div className="categories">
            {this.props.children}
        </div>
    }
}

export const Category = (props: { name: string, onClick?: () => void, active?: boolean }) => {
    return <div className={"category" + (props.active ? " active" : "")} onClick={props.onClick}>
        <div className="glyphicon glyphicon-hand-right category-icon" />
        {props.name}
    </div>
}