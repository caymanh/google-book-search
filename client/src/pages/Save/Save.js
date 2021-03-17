import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Book from "../../components/Book/Book";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { List } from "../../components/List/List";

import "./Save.css";

class Save extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleBookDelete = (id) => {
    API.deleteBook(id).then((res) => this.getSavedBooks());
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map((book) => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-primary btn-sm mx-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <p className="text-center fs-6 fst-italic">
                  Oops.. You do not have any saved books
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Save;
