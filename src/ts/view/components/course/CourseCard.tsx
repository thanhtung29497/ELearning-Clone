import React = require("react");
import { ICourse } from "../../../model/Course";
import { StarRating } from "./StarRating";

export class CourseCard extends React.Component<{ course: ICourse }, {}> {
    render() {
        let course = this.props.course;
        return <div className="course">
            <div className="avatar">
                <img src={course.avatar} />
            </div>
            <div className="content">
                <div className="name">{course.name}</div>
                <div className="badges">
                    <div className="cost">
                        {course.cost === 0 ? "Free" : course.cost}
                    </div>
                    <div className="right-align">
                        <div className="num-attendant">
                            <img src={"resources/images/course/attendant.png"} alt="" className="image" />
                            <span className="number">{course.numAttendant}</span>
                        </div>
                        <StarRating rate={course.rate} />
                    </div>
                </div>
                <div className="description">
                    {course.description}
                </div>
            </div>
        </div>
    }
}