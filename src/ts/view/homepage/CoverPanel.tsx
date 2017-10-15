import React = require("react");

export const Misson = (props: { text: string, smallText?: string }) => {
    return <div>
        <h1 className="misson">
            {props.text}
        </h1>
        <h2 className="misson small">
            {props.smallText}
        </h2>
    </div>
}

export const CoverPanel = (props: { children?: Element }) => {
    return <div className="cover-photo-panel">
        {props.children}
    </div>
}