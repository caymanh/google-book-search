import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Form from "../../components/Form/Form";
import Book from "../../components/Book/Book";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { List } from "../../components/List/List";
import API from "../../utils/API";
import "./Search.css";

// Search Books class component
class Search extends Component {
  // Components initial state
  state = {
    books: [],
    q: "",
    message: "",
  };

  // Function to handle input change in search bar
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Function to get books for search query
  getBooks = () => {
    API.getBooks(this.state.q)
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No Books Found!",
        })
      );
  };

  // Handle search form submit function
  handleFormSubmit = (event) => {
    event.preventDefault();

    // Get books for search query
    this.getBooks();
  };

  // function to save book in database
  handleBookSave = (id) => {
    const book = this.state.books.find((book) => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.q}
        />
        {/* Container */}
        <Container>
          {/* Book Search Form */}

          <Row>
            <Col size="md-12">
              {/* Search Results Card */}

              {this.state.books.length ? (
                <List>
                  {this.state.books.map((book) => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary mx-2 btn-sm"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h5 className="text-center">{this.state.message}</h5>
              )}
            </Col>
          </Row>
          <br />

          <br />
        </Container>
        <br />
      </div>
    );
  }
}

export default Search;
