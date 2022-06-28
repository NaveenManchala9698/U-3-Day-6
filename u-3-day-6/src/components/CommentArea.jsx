import { Component } from "react";
import CommentList from "./CommentList";
import { Col, ListGroup } from 'react-bootstrap'

class CommentArea extends Component {
    state = {
        comments: [],
    };

    componentDidMount = () => {
       if(this.props.asin) this.fetchComments();
    };

    componentDidUpdate = (prevProps, prevState) => {
        if(this.props.asin && prevProps.asin !== this.props.asin) {
            this.fetchComments()
        }
    }

    fetchComments = async () => {
        try {
            const url = "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin

            const response = await fetch(url, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTYzMzM5MzUsImV4cCI6MTY1NzU0MzUzNX0.c-9Im8VXXiGRjorisVfuH72atqDkHzY91DG_qsAAI1U"
                }
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                this.setState(
                    {
                        comments: data
                    }
                )
            }
            else {
                console.log("Errrrror!!")
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    render() {
        return (
            <>
                <h4> Book Comments</h4>
                
                    {/* {this.state.comments && this.state.comments.map((bookComment) => (
                        <Col key={bookComment._id}>
                        <p>Rating = {bookComment.rate}</p>
                        <p>comments = {bookComment.comment}</p>
                        </Col>
                    )) } */}
                    {this.state.comments && <ListGroup><CommentList commentsArray={this.state.comments} /></ListGroup>}
                
            </>

        )
    }
}
export default CommentArea;
