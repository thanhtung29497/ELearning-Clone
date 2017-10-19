import React = require("react");

export const WhySelectPanel = (props: { title?: string, children?: Element }) => {
    return <div className="why-select-panel">
        <div className="container">
            {props.title && <h3 className="title">{props.title}</h3>}
            {props.children}
        </div>
    </div>
}

export const WhySelectItem = (props: { image: string, title: string, description: string }) => {
    return <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 why-select-item">
        <img className="image" src={props.image} />
        <p className="title">{props.title}</p>
        <p className="description dot-3">{props.description}</p>
    </div>
}
