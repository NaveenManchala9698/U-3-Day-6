
import { Component } from "react";

class SingleComment extends Component {
    render() {
        return (
            <p>{this.props.bookComments.comment}</p>
        )
    }
}

export default SingleComment