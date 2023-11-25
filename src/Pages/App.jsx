// import React, { useState, useEffect } from "react";
// import { useEffect, useState } from "react";
// import BookRow from "../../Component/Bookrow/BookRow";
// import {getFromLocalStorage } from '../../Component/Uitis'
import { useState } from 'react';
import './index.css'

export const App = () => {
  // main array of objects state  books state  books array of objects



  // const [books, setBooks] = useState(getFromLocalStorage());

  // input field states
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [pubYear, setPubYear] = useState('')
    // form submit event
  const handleInput = (e) => {
  //  console.log( e)
  e.preventDefault()
  }
  const [books, setBooks] = useState([])
  const book = {
    title, 
    author, 
    isbn, 
    pubYear
  }
  setBooks([...books, book])

  // const [author, setAuthor] = useState(""); 
  // const [title, setTitle] = useState("");
  // const [isbn, setIsbn] = useState("");
  // const [pubYear, setPubYear] = useState("");
  // const clearInput = () => {
  //   setAuthor("");
  //   setTitle("");
  //   setIsbn("");
  //   setPubYear("");
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

    // creating a book object
  //   const book = {
  //     title,
  //     author,
  //     isbn,
  //     pubYear,
  //   };
  //   setBooks([...books, book]);
  //   clearInput();
  // };

  // delete book from LS
  // const deleteBook = (isbn) => {
  //   const filterBook = books.filter((book) => book.isbn !== isbn);
  //   console.log(filterBook);
  //   setBooks(filterBook);
  // };

  // // saving data to local storage
  // useEffect(() => {
  //   localStorage.setItem("books", JSON.stringify(books));
  // }, [books]);
  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <form className="form-group"onSubmit={handleInput}> 
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              required
            ></input>
            <br></br>
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              value={author}
              onChange={(e)=>setAuthor(e.target.value)}
            ></input>
            <br></br>
            <label>ISBN#</label>
            <input
              type="text"
              className="form-control"
              value={isbn}
              onChange={(e)=>setIsbn (e.target.value)}
            ></input>
            <br></br>
            <label>Published year</label>
            <input
              type="text"
              className="form-control"
              value={pubYear}
              onChange={(e)=>setPubYear(e.target.value)}
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form> 
        </div>
        <div className="view-container">
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ISBN#</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Published Year</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
              >
                Remove All
              </button>
            </>
        </div>
      </div>
    </div>
  );
};

export default App;
