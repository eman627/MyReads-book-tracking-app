import React from "react";
import Bookcomp from "./book_comp"; 

const bookshelf=({shelf_title,all_books,shelf_check,update_shelf_book})=>{  
    const shelf_books= all_books.filter((book)=>book.shelf === shelf_check )  
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf_title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">  
         {shelf_books.map((book)=>(
            <Bookcomp  key={book.id}  book_data={book}   update_shelf_book={update_shelf_book} />  
          ))}
          </ol>
        </div>
      </div>
    );

} 
 export default bookshelf;