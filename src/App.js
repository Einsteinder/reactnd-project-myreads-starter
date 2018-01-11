import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooksCurrent from './ListBooksCurrent'
import ListBooksWant from './ListBooksWant'
import ListBooksRead from './ListBooksRead'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'
import {Route} from 'react-router-dom'
import './App.css'



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })}

  render() 
{    

    return (

      <div className="app">
      
      <Route path = "/search" component = {SearchBooks}/>
  
     <Route exact path="/" render={()=>(

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
        
                 <ListBooksCurrent books = {this.state.books}/>

                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <ListBooksWant books = {this.state.books}/>

                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <ListBooksRead books = {this.state.books}/>

                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
     )}/>
        )}


      </div>
    )
  }
}

export default BooksApp
