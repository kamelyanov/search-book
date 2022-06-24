import React from "react"
import { useState } from "react"


function Forms({ searchBooks, buttonText }) {
  const [name, setName] = useState('')
  const booksCategories = ["all", "art", "biography", "computers", "history", "medical", "poetry"]

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    searchBooks(name)
  }

  return (
    <section className="forms">
      <form
        className="forms__search"
        onSubmit={handleSubmit}>
        <label className="forms__field">
          <input
            className="forms__input"
            placeholder="input books name"
            name="booksName"
            value={name || ''}
            onChange={handleNameChange}
          />
        </label>
        <label>
          <button className="forms__button-submit" type="submit">{buttonText}</button>
        </label>
      </form>
      <form className="forms__sort">
        <select className="forms__button-sort">
          {
            booksCategories.map(item => <option key={item}>{item}</option>)
          }
        </select>
        <select className="forms__button-sort">
          <option>relevance </option>
          <option>newest</option>
        </select>
      </form>
    </section>
  )
}

export default Forms