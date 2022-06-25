import React from "react";
import  Bookshelf from "./bookShelf_comp";
import {Link} from "react-router-dom";
const homeComp= ({all_books , update_shelf_book})=>{ 
    return (
    
    <div className="list-books">
              <div className="list-books-title">
              <h1>MyReads</h1>
             </div>
             <div className="list-books-content">  
             <div>
                <Bookshelf   shelf_title="Currently Reading"  all_books={all_books} shelf_check={"currentlyReading"}  update_shelf_book={update_shelf_book} />
                <Bookshelf  shelf_title="Want To Read"  all_books={all_books} shelf_check={"wantToRead"}  update_shelf_book={update_shelf_book} />
                <Bookshelf  shelf_title="Read"  all_books={all_books} shelf_check={"read"}  update_shelf_book={update_shelf_book }/>
             </div>
             </div>  
             <div className="open-search"> 
             <Link to={"/search"} > search a book </Link>
             </div>
      </div>
    
    )

} 
export default homeComp;