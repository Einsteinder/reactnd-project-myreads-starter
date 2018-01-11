import React from 'react'
import { Link } from 'react-router-dom'
import SearchResult from './SearchResult';



class SearchBooks extends React.Component {
    state = {
        query: 'Android'
      }
      updateQuery = (query) => {
        this.setState({ query: query.trim() })
      }
    
render(){
    const { query } = this.state


return  <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />

              </div>
            </div>
            <div className="search-books-results">
             
                <SearchResult query = {query}/>

            </div>
          </div>
         }
        }

export default SearchBooks
