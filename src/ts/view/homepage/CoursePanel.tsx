import React = require("react");
import { ICourse } from "../../model/Course";
import { CourseCard } from "../components/course";
import { Slider } from "../components/slider/slider";

export class CoursePanel extends React.Component<{ title: string, courses: ICourse[] }, {}> {
    render() {
        return <div className="course-panel">
            <div className="title">{this.props.title}</div>
            <div className="courses">
                <Slider slidesToScroll={1} slidesToShow={3}>
                    {this.props.courses.map(course => {
                        return <CourseCard course={course} key={course.id} />
                    })}
                </Slider>

            </div>
        </div>
    }
}