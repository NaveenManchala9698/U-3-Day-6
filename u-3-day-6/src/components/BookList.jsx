import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";



class BookList extends Component {

    render() {
        return (
            <Container>
                <Row>

                    {this.props.books && this.props.books.map(SelectedBook => (
                        <Col md={6}>
                            <SingleBook book={SelectedBook} 
                            changeBook = {this.props.changeBook}
                            />
                        </Col>
                    ))}

                </Row>
            </Container>


        )
    }
}

export default BookList