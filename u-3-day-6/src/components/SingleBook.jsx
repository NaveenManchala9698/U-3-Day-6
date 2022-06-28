
import { Component } from "react";
import {Card} from 'react-bootstrap'


class SingleBook extends Component {

   /*  state = {
        selected: false
    } */
    render() {
        return (
            <Card
          // onClick={(e) => this.setState({selected: !this.state.selected})}   
          onClick={() => this.props.changeBook(this.props.book.asin)}
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