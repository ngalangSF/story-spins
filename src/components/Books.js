import React, { Component } from 'react';
import Popup from '../components/Popup';
import bookData from './../data/books';

class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
      popupIndex: null,
      books: bookData

    };
  }

  togglePopup(index) {
      this.setState({
        popupIndex: index,
        contentType: "Book"
      });
  }

  render() {
    return(
      <main className="container">
          <section className="books">
            <header className="jumbotron my-4">
              <h1 className="display-4" align="center">Books</h1>
            </header>
          </section>
          <section className="row text-center">
            {
              this.state.books.map((book, index) =>
                  <section id={index} className="col-lg-4">
                    <button>
                      <img src={book.coverPhoto} className="cover" alt={book.title}
                        onClick={this.togglePopup.bind(this, index)}>
                      </img>
                    </button>
                    <h4 className="card-title">{book.title}</h4>
                  </section>
                )
            }
            {
              this.state.popupIndex !== null ?
                <Popup
                  popupIndex={this.state.popupIndex}
                  closePopup={
                    this.togglePopup.bind(this, null)
                  }
                  contentType={this.state.contentType}
                />
                : null
            }
          </section>
      </main>
    )
  }
}
export default Books;
