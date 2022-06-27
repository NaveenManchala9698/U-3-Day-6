import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
    render() {
        return (
               <li>
                   { this.props.CommentsArray && this.props.CommentsArray.map((comment) => (
                        <SingleComment bookComments={comment}/>
                    ))}
               </li>
        )

    }
}
export default CommentList