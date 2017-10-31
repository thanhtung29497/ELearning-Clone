import React = require("react");
import { ICourse } from "../../model/Course";
import { VerticalCourseCard } from "../components/course";
import { Link } from "react-router-dom";

export class CoursePanel extends React.Component<{
    title: string;
    courses: ICourse[];
    defaultCourseNumber?: number;
    onClickShowMore?: () => void;
    showMoreLink?: string;
    showMoreNumber?: number;
}, {
        currentNumber: number;
    }>  {

    constructor(props: { title: string, courses: ICourse[], defaultCourseNumber?: number }) {
        super(props);
        if (props.defaultCourseNumber) {
            this.state = {
                currentNumber: props.defaultCourseNumber
            }
        } else {
            this.state = {
                currentNumber: Math.min(3, props.courses.length)
            }
        }
    }

    showMore() {
        if (this.props.onClickShowMore) {
            this.props.onClickShowMore();
            return;
        }
        let showMoreNumber = this.props.showMoreNumber ? this.props.showMoreNumber : 3;
        this.setState({
            currentNumber: Math.min(this.state.currentNumber + showMoreNumber, this.props.courses.length)
        })
    }

    render() {
        return <div className="course-panel">
            {
                this.props.title &&
                <div className="title">{this.props.title}</div>
            }
            <div className="course-list">
                {this.props.courses.slice(0, this.state.currentNumber).map((course, index) => {
                    return <div className="course-item" key={index}>
                        <VerticalCourseCard course={course} />
                    </div>
                })}
            </div>
            {
                (this.state.currentNumber < this.props.courses.length) && (
                    this.props.showMoreLink ?
                        <Link to={this.props.showMoreLink}>
                            <div className="show-more-button" onClick={this.showMore.bind(this)}>
                                Show More
                            </div>
                        </Link> :
                        <div className="show-more-button" onClick={this.showMore.bind(this)}>
                            Show More
                        </div>
                )
            }
        </div>
    }
}