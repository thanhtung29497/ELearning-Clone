import React = require("react");

const LARGE_WIDTH = 940;
const SMALL_WIDTH = 720;

export class FeedbackPanel extends React.Component<{}, { itemWidth: number }>  {

    constructor() {
        super();
        this.state = {
            itemWidth: window.innerWidth >= LARGE_WIDTH ? LARGE_WIDTH : SMALL_WIDTH,
        }
        window.addEventListener("resize", this.changeItemWidth.bind(this));
    }

    changeItemWidth() {
        if (window.innerWidth >= LARGE_WIDTH) {
            if (this.state.itemWidth === SMALL_WIDTH) {
                this.setState({
                    itemWidth: LARGE_WIDTH
                })
            }
        } else if (window.innerWidth <= 760) {
            if (this.state.itemWidth === LARGE_WIDTH) {
                this.setState({
                    itemWidth: SMALL_WIDTH,
                })
            }
        }
    }


    render() {
        return <div className="testimonials-panel" id="testimonials-panel">
            <h3 className="title">Phản hồi về chúng tôi</h3 >
            <div className="container">
                <div className="owl-carousel owl-theme" style={{ opacity: 1, display: "block" }}>
                    <div className="owl-wrapper-outer">
                        <div className="owl-wrapper wrapper">
                            <div className="owl-item" style={{ width: this.state.itemWidth }}>
                                <div className="item">
                                    <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 block-teacher">
                                        <img className="img-slide-test" src="http://storage.googleapis.com/elearning-hust.appspot.com/images/680118744-1501919755839-haith-200x200.jpg" />
                                    </div>
                                    <div className="col col-xs-12 col-sm-12 col-md-9 col-lg-9 front-arrow-img">
                                        <div className="content-slide-test">
                                            <p style={{ fontWeight: "bold", marginBottom: 0 }}>TS. Trần Hoàng Hải</p>
                                            <p style={{ marginBottom: 0 }}>Phó Giám đốc Trung tâm Mạng</p>
                                            <p className="dot-4">Hệ thống đào tạo trực tuyến được xây dựng với những tính năng ưu việt giúp tối ưu hoá việc học, ghi nhớ, trao đổi, tương tác, giúp học viên tiếp thu các kiến thức một cách dễ dàng, hiệu quả và thú vị.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="owl-controls clickable" style="display: none;"><div className="owl-pagination"><div className="owl-page active"><span className=""></span></div></div></div></div> */}
                </div>
            </div>
        </div >
    }
}