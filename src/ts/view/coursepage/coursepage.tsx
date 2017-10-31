import React = require("react");
import { NavigationSideBar, INavigationLink } from "../components/navigation";
import { HeaderPanel } from "../components/header/HeaderPanel";
import { configs } from "../../config/coursepage";
import { Dashboard } from "./Dashboard";
import { Category } from "./Category";
import { Route } from "react-router-dom";

export class CoursePage extends React.Component<{ match: { params: { value: string } } }, { expandSideBar: boolean }> {

    path: INavigationLink;

    constructor(props) {
        super(props);
        this.state = {
            expandSideBar: configs.sidebar.expand
        }
        this.path = {
            group: "/courses",
            item: "/" + props.match.params.value,
        }
    }

    componentWillReceiveProps(nextProps: { match: { params: { value: string } } }) {
        this.path = {
            group: "/courses",
            item: "/" + nextProps.match.params.value,
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
            <NavigationSideBar {...configs.sidebar} path={this.path} expand={this.state.expandSideBar} onSwitch={this.switchSideBar.bind(this)} />
            <div className="main">
                <HeaderPanel height={65} scrollTopToChange={0} />
                <div className="content">
                    <Route exact path="/courses" component={Dashboard} />
                    {
                        configs.categories.map(category => {
                            return <Route key={category.path} exact path={"/courses" + category.path} component={Category} />
                        })

                    }
                </div>

            </div>
        </div>
    }
}