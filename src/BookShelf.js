import React, { Component } from 'react'
import Book from './Book.js'

class BookShelf extends Component {

    render() {
        const {books, changeShelfType} = this.props;

        return (
            <ol className='books-grid'>
                {books.map((book) => (
                    <div className="book" key={book.id}>
                        <Book 
                            book={book}
                            changeShelfType={changeShelfType}
                        />
                    </div>
                ))}
            </ol>
        )
    }
}

export default BookShelf