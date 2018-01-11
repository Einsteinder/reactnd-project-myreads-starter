import React from 'react'
import * as BooksAPI from './BooksAPI'
import SelectDrop from './SelectDrop'


class SearchResult extends React.Component {
    state = {
        result: []
      }

      componentDidMount(){
        BooksAPI.search(this.props.query).then((books) => {
            this.setState({ result:books })
          })
    }

    componentDidUpdate() {
        BooksAPI.search(this.props.query).then((books) => {
            this.setState({ result:books })
          })
      }
  render(){
    const books = this.state.result

      return        <ol className="books-grid">         
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


export default SearchResult
