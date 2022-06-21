function Sort({ booksCategories }) {
  return (
    <>
      <select>
        {
          booksCategories.map(item => <option key={item}>{item}</option>)
        }
      </select>
      <select>
        <option>relevance </option>
        <option>newest</option>
      </select>
    </>
  )
}

export default Sort 