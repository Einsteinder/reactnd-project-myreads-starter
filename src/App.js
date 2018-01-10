import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class SelectDrop extends React.Component {
  state = {
    value: this.props.book.shelf
  }


  render() {
    const book = this.props.book
    BooksAPI.update(book,this.state.value)

    return (

        <label>
                <select value={this.state.value} onChange={(event) => this.setState({ value:(event.target.value)})}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
        </label>

    );
  }
}
class ListBooks extends React.Component{
  render(){

    const books = this.props.books
    return <ol className="books-grid">
    {books.map((book) => (
    <li  key={book.id} >
        <div className='book'>
           <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
              <div className="book-shelf-changer">
              <SelectDrop book = {book}/>
              </div>
           </div>
           <div className="book-title">{book.title}</div>
           <div className="book-authors">{book.authors}</div>
        </div>
    </li>
 
  ))}
   </ol>
  }
}
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })}

  render() 
{    

    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
        
                    <ListBooks books = {this.state.books.filter((book)=>(book.shelf==="currentlyReading"))}/>

                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <ListBooks books = {this.state.books.filter((book)=>(book.shelf==="wantToRead"))}/>

                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <ListBooks books = {this.state.books.filter((book)=>(book.shelf==="read"))}/>

                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
