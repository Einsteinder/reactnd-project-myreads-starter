import React from 'react'
import * as BooksAPI from './BooksAPI'


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
  export default SelectDrop