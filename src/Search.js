import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
    state = {
        showingBooks: []
    }
    searchBooks = (query, booksInShelf) => {
        if (query) {
            BooksAPI.search(query).then((res) => {
                console.log(res)
                if (Array.isArray(res)) {
                    res.map((book) => {
                        book.shelf = "none"
                        booksInShelf.forEach((bookInShelf) => {
                            if(book.id === bookInShelf.id) {
                                book.shelf = bookInShelf.shelf
                            }
                        })
                    })
                    this.setState({showingBooks: res})
                } else {
                    this.setState({showingBooks: []})
                }
            })
        } else {
            this.setState({showingBooks: []})
        }
    }


    render() {
        const {changeShelfType, books} = this.props;
        const {showingBooks} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title" onChange={(e) => this.searchBooks(e.target.value, books)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <li className="book" key={book.id}>
                              <Book 
                                book={book}
                                changeShelfType={changeShelfType}
                              />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

        )
    }
}

export default Search;