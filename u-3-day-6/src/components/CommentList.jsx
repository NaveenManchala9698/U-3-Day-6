import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
    render() {
        return (
               
                   <>
                       { this.props.commentsArray && this.props.commentsArray.map((comment) => (
                        <li key={comment._id}><SingleComment  bookComments={comment}/></li>
                        ))}
                   </>
               
        )

    }
}
export default CommentList