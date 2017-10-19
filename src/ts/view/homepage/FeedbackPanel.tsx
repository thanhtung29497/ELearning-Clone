import React = require("react");

export class FeedbackPanel extends React.Component<{ title: string, name: string, position: string, content: string }, {}>  {

    render() {
        return <div className="testimonials-panel" id="testimonials-panel">
            <h3 className="title">{this.props.title}</h3 >
            <div className="wrapper" >
                <div className="text">
                    <p className="content">{this.props.content}</p>
                    <div className="name">{this.props.name}</div>
                    <div className="position">{this.props.position}</div>
                </div>
                <div className="image" />
            </div>
        </div >
    }
}