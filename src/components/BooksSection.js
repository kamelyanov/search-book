import Card from "./Card"

function BooksSection ({bookData}) {
  console.log(bookData)
  return (
    <section className="booksSection">
      <div className="booksSection__count"></div>
      <div className="cards">
        {   
          bookData.map((card) => <Card
            key={card.id}
            card={card}
          />)
        }
      </div>
    </section>
  )
}

export default BooksSection