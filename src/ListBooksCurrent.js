import React from 'react'
import * as BooksAPI from './BooksAPI'
import SelectDrop from './SelectDrop'

class ListBooksCurrent extends React.Component{
    state = {
      readStatus: []
    }
    componentDidMount(){
      BooksAPI.getAll().then((books) => {
          this.setState({ readStatus:books.filter((book)=>(book.shelf==="currentlyReading")) })
        })
  }
    componentDidUpdate() {
      BooksAPI.getAll().then((books) => {
        this.setState({ readStatus:books.filter((book)=>(book.shelf==="currentlyReading")) })
      })}
  
  
    render(){
  
      const books = this.state.readStatus
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

  export default ListBooksCurrent