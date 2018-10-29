import React from 'react'
import NoImage from './icons/no-image-icon-21.png'
import ShelfChanger from './ShelfChanger.js'

const Books = (props) => {
    const {book, changeShelfType} = props;
    const bookImage = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : NoImage;
    const bookAuthor = book.authors ? book.authors : "Unknown Author"

    return (
        <div key={book.id}>
        <div className="book-top">
            <img className="book-cover" src={bookImage} style={{width: 128, height: 193}} alt={`${book.title} book cover`} />
            <ShelfChanger 
                changeShelfType={changeShelfType}
                book={book}/>
        </div>
        <p className="book-title">{book.title}</p>
        <p className="book-authors">{bookAuthor}</p>
        </div>
    )
}

export default Books