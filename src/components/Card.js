import React from "react";

function Card({card}) {
  console.log(card) 
  return (      
    <div className="card">
      <img className="card__cover" src={card.volumeInfo.imageLinks.smallThumbnail} alt=""/>
      <p className="card__name">{card.volumeInfo.title}</p>
      <p className="card__category">{card.volumeInfo.categories}</p>
      <p className="card__autors">{card.volumeInfo.authors}</p> 
    </div>
  )
}

export default Card