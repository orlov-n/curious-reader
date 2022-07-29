import React from 'react'
import { IBook } from '../Interfaces';
import './BookCard.css'

interface Props {
  book: IBook
}

const BookCard = ({ book }: Props) => {
  return (
    <article className='book-card'>
      <div className='book-image-container'>
        <img className='book-image' src={book.book_image}></img>
        </div>
        <div className='description-box'>
          <p className='book-title'>{book.title}</p>
          <p className='book-author'>{book.author}</p>
          <p className='current-rank'>NY Times Current Rank: {book.rank}</p>
          <p>{book.description}</p>
          <p className='info-publishing'>{book.publisher} Publishing</p>
      </div>
    </article>
  )
}

export default BookCard;