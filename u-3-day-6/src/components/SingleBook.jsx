
import { Component } from "react";
import {Card} from 'react-bootstrap'


class SingleBook extends Component {
    render() {
        return (
            <Card
            key={this.props.book.asin}
           onClick={(e) => this.props.changeBook('book')}   
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleBook