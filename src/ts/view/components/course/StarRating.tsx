import React = require("react");

export const StarRating = (props: { rate: number }) => {
    return <div className="star-rating">
        {[1, 2, 3, 4, 5].map((index) => {
            if (props.rate >= index) {
                return <Star rate={"full"} key={index} />
            }
            if (index - props.rate < 1) {
                return <Star rate={"half"} key={index} />
            }
            return <Star rate={"empty"} key={index} />
        })}
    </div>
}

export const Star = (props: { rate: string }) => {
    let className = "fa fa-star";
    switch (props.rate) {
        case "empty": className = "fa fa-star-o icon-star-empty"; break;
        case "full": className = "fa fa-star"; break;
        case "half": className = "fa fa-star fa-star-half-o"; break;
    }
    return <i className={className} aria-hidden="true"></i>
}