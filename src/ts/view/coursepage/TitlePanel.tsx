import React = require("react");

export const TitlePanel = (props: { title: string }) => {
    return <div className="title-panel">
        {props.title}
    </div>
}