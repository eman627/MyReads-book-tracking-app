import React from "react";
import { Link } from "react-router-dom";
import Bookcomp from "./book_comp"; 

 
const bookSearch=({searched_books_result,serachKeyUpdating,update_shelf_book,refresh})=>{  

 
    return (
        <div className="search-books">
        <div className="search-books-bar"> 
           <Link className="close-search" to={"/"}  onClick={()=>{refresh()}} > 
             
           </Link> 
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"  onChange={serachKeyUpdating}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"> 
          {searched_books_result.map((book)=>(
              <Bookcomp  key={book.id}  book_data={book}   update_shelf_book={update_shelf_book} />
            ))}
         
          </ol>
        </div>
      </div>
    )
          } 
       
         
export default bookSearch;
