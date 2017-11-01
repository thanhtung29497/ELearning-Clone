import React = require("react");
import { courses } from "../../data/course";
import { CoursePanel } from "./CoursePanel";
import { TitlePanel } from "./TitlePanel";
import { configs } from "../../config/coursepage";
import { Tag } from "../components/label";

export class Dashboard extends React.Component<{}, {}> {
    render() {
        return <div>
            <TitlePanel title={"Courses"} />
            <div className="body">
                <div className="tag-panel">
                    {
                        configs.categories.map((category, index) => {
                            return <Tag {...category} key={index} />
                        })
                    }
                </div>
                <CoursePanel courses={courses} title="Popular Courses" />
                {
                    configs.categories.map(category => {
                        return <CoursePanel key={category.path} courses={courses} title={category.title} showMoreLink={"/courses" + category.path} />
                    })
                }
            </div>
        </div>
    }
}