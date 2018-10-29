import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf.js'

class ListBooks extends Component {

    render() {
        const {books, changeShelfType} = this.props;
        const filteredBooks = (category) => (
            books.filter((book) => book.shelf === category)
        )
        const shelfTypes = [
            {
                shelf: "Currently Reading",
                type: "currentlyReading"
            },
            {
                shelf: "Want To Read",
                type: "wantToRead"
            },
            {
                shelf: "Read",
                type: "read"
            }
        ]

        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1> My Reads </h1>
              </div>
              <div className="list-books-content">
                {shelfTypes.map((shelfType) => (
                <div className="bookshelf" key={shelfType.type}> 
                    <h2 className="bookshelf-title"> {shelfType.shelf} </h2>
                    <BookShelf 
                      books={filteredBooks(shelfType.type)}
                      changeShelfType={changeShelfType}
                    />
                </div>
                ))}
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
        )
    }
}

export default ListBooks