import React = require("react");
import { courses } from "../../data/course";
import { CoursePanel } from "./CoursePanel";
import { TitlePanel } from "./TitlePanel";
import { configs } from "../../config/coursepage";

export class Category extends React.Component<{ location: { pathname: string } }, {}> {
    render() {
        // get title of category which has id equal to location.pathname
        let title = configs.categories.filter(category => {
            return this.props.location.pathname.includes(category.path)
        })[0].title;
        return <div>
            <TitlePanel title={title} />
            <div className="body" >
                <CoursePanel courses={courses} title="" />
            </div>
        </div>
    }
}