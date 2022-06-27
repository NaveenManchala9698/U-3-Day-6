import { Component } from "react";
import CommentList from "./CommentList";
import { ListGroup } from 'react-bootstrap'

class CommentArea extends Component {
    state = {
        comments: [],
    };

    componentDidMount = () => {
        this.fetchComments();
    };

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
                alert("Errrrror!!")
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
                <ListGroup>
                    {this.state.comments && <CommentList commentsArray={this.state.comments} />}
                </ListGroup>
            </>

        )
    }
}
export default CommentArea;
