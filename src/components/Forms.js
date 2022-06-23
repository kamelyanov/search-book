import React from "react"
import { useState } from "react"
import Sort from "./Sort"

function Forms({searchBooks, buttonText}) {
  const [name, setName] = useState('')
  const booksCategories = ["all", "art", "biography", "computers", "history", "medical", "poetry"]

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    searchBooks (name)
  }
  
  return (
    <section className="forms">
      <form 
        className="" 
        onSubmit={handleSubmit}>
        <fieldset className="form__set">
          <label className="form__field">
            <input
              className="form__input"
              placeholder="Введите название книги"
              name="booksName"
              value={name || ''}
              onChange={handleNameChange}
            />
          </label>
          <label>
            <button className="forms__" type="submit">${buttonText}</button>
          </label>
        </fieldset>
      </form>
      <Sort 
        booksCategories={booksCategories}
      />
    </section>
  )
}

export default Forms