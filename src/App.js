import React, { useState } from "react";

import Header from "./components/Header";
import Forms from "./components/Forms";
import BooksSection from "./components/BooksSection";


function App() {
  const [bookData, setBookData] = useState([]);

  function searchBooks(search) {
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU', {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then(data => setBookData(data.items))
      .catch(err => console.log(err))
  }

  return (
    <div className="page">
      <Header />
      <Forms
        searchBooks={searchBooks}
        buttonText={'search'} //прописать начать поиск или поиск... во время обработки запроса
      />
      <BooksSection
        bookData={bookData}
      />
    </div>
  );
}

export default App;
