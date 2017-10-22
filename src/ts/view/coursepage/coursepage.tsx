import React = require("react");
import { NavigationSideBar } from "../components/navigation";
import { HeaderPanel } from "../components/header/HeaderPanel";
import { TitlePanel } from "./TitlePanel";
import { Tag } from "../components/label"
import { configs } from "../../config/coursepage";

export class CoursePage extends React.Component<{}, { expandSideBar: boolean }> {
    constructor() {
        super();
        this.state = {
            expandSideBar: configs.sidebar.expand
        }
    }

    switchSideBar() {
        this.setState({
            expandSideBar: !this.state.expandSideBar
        });
    }

    render() {
        let expandSideBar = this.state.expandSideBar;
        return <div className={"course-page" + (expandSideBar ? "" : " collapse-side-bar")} >
            <NavigationSideBar {...configs.sidebar} expand={this.state.expandSideBar} onSwitch={this.switchSideBar.bind(this)} />
            <div className="main">
                <HeaderPanel height={65} scrollTopToChange={0} />
                <div className="content">
                    <TitlePanel title={"Courses"} />
                    <div className="body">
                        <div className="tag-panel">
                            {configs.categories.map(category => {
                                return <Tag {...category} />
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }
}