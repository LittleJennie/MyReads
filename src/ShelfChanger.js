import React, { Component } from 'react'


class ShelfChanger extends Component {
    state = {
        currentShelf: this.props.book.shelf
    }

    render() {
        const {book, changeShelfType} = this.props;
        const {currentShelf} = this.state;

        const newShelfType = (e) => {
            changeShelfType(book, e.target.value)
            this.setState({currentShelf: e.target.value})  
        }
        console.log(currentShelf)

        return (
          <div className="book-shelf-changer">
            <select onChange={newShelfType} value={currentShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
          </div>
        )
    }
}

export default ShelfChanger