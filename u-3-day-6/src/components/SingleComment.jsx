
import { Component } from "react";

class SingleComment extends Component {
    render() {
        return (
            <>{this.props.bookComments.comment}</>
        )
    }
}

export default SingleComment