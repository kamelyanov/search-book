import React from "react";
import {api} from "./utils/Api"

import Header from "./components/Header";
import Forms from "./components/Forms";
import BooksSection from "./components/BooksSection";


function App() {

  function searchBooks(name) {
    fetch('https://www.googleapis.com/books/v1/volumes?q='+name+':keyes&key=AIzaSyCgpEdnSCmlUy_BW8JdR8QrB-mi46QgrPI', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then((res) => console.log(res))
    .catch((err) =>console.log(err))
  }
  


  return (
    <div className="page">
      <Header />
      <Forms 
        searchBooks={searchBooks}
        buttonText={'Начать поиск'} //прописать начать поиск или поиск... во время обработки запроса
      />
      <BooksSection />
    </div>
  );
}

export default App;
