import React from 'react'
import * as BooksAPI from './BooksAPI'
import SelectDrop from './SelectDrop'


class SearchResult extends React.Component {
    state = {
        result: []
      }


      componentWillReceiveProps() {
        let resultBooks = []
        BooksAPI.search(this.props.query).then((books) => {
            if(typeof books !=='undefined'){
            
            let titleList = []
           
            BooksAPI.getAll().then((booksInShelf) => {
                for(let i=0;i<booksInShelf.length;i++){
                    titleList.push(booksInShelf[i].title)

                }
            

                for(let i=0;i<books.length;i++){
                    if (titleList.includes(books[i].title)){
                        function isTheBook(book) { 
                            return book.title === books[i].title;}
                      resultBooks.push(booksInShelf.find(isTheBook))

                    }else{
                      resultBooks.push(books[i])
                  }
                  this.setState({ result:resultBooks })  

              }})
           

        
      }})
        
}
  render(){
    const books = this.state.result

      return       <ol className="books-grid">         
      
           {(typeof(books!=='undefined')|| books!==[]|| books) && books.map((book) => (
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
