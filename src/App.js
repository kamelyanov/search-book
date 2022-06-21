import React from "react";
import Api from "./utils/Api"

import Header from "./components/Header";
import Forms from "./components/Forms";
import BooksSection from "./components/BooksSection";


function App() {
  
  function searchBooks (searchName) {
    console.log(searchName)
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
