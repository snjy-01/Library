import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LibHome from './components/LibHome';
import About from './components/About';
import React, { useState, useEffect } from 'react';
import Issue from './components/Issue';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  
  let intinfo;
 
  if (localStorage.getItem("books") === null) {
    intinfo =[];
  }
  else {
    intinfo = JSON.parse(localStorage.getItem("books"));
  }
  const [books, setInfo] = useState(intinfo);
  const onDelete = (show) => {
    console.log("i'm on delete", show);
    setInfo(books.filter((e) => {
      return e !== show;
    }));
    localStorage.setItem("books", JSON.stringify(books));
  }
  const addBook = (b_Id, b_Name, s_Id, s_Name) => {
    console.log("i'm issuing", b_Id, b_Name, s_Id, s_Name)
    let sno = books.length + 1;
    const myBook = {
      sno: sno,
      bid: b_Id,
      bname: b_Name,
      sid: s_Id,
      sname: s_Name

    }
    setInfo([...books, myBook]);
  }
  
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])

  console.log(books)

  return (

    <>
      <Router>
        <Header title="Library Management System" />
        <Routes>
          <Route path="/LibHome" exact element={<LibHome books={books} onDelete={onDelete} />}></Route>
          <Route path="/Issue" exact element={<Issue addBook={addBook} />}></Route>
          <Route path="/About" exact element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
