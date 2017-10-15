import React = require("react");

export class SearchBar extends React.Component<{}, {}> {
    render() {
        return <div className="search-bar">
            <input type="text" placeholder="Search questions by id" className="search-input" />
            <div className="glyphicon glyphicon-search search-icon"></div>
        </div>
    }
}