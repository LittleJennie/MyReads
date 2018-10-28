import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'
import './App.css'

class App extends Component {
  state = {
    allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({allBooks: books})
    })
  }

  changeShelfType = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf
      this.setState(prevState => ({
        allBooks: prevState.allBooks
          .filter(e => e.id !== book.id)
          .concat(book)
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks 
            books={this.state.allBooks}
            changeShelfType={this.changeShelfType}
          />
        )}/>
        <Route exact path="/SearchPage" render={() => (
          <SearchPage 
            books={this.state.allBooks}
            changeShelfType={this.changeShelfType}
          />
        )}/>
      </div>
    )
  }
}

export default App;
