import React = require("react");
import utils = require("../../../utils");
import ReactSlick from 'react-slick';

export class Slider extends React.Component<{
    slidesToShow: number;
    slidesToScroll: number;
    dots?: boolean;
    speed?: boolean;
}, {}> {



    render() {

        let items = utils.toArray(this.props.children);

        var settings = {
            dots: this.props.dots !== undefined ? this.props.dots : true,
            infinite: true,
            speed: this.props.speed !== undefined ? this.props.speed : 500,
            slidesToShow: this.props.slidesToShow,
            slidesToScroll: this.props.slidesToScroll,
            autoplay: true,
            autoplaySpeed: 1,
        };
        return <ReactSlick {...settings }>
            {items.map(item => item)}
        </ReactSlick>
    }
}