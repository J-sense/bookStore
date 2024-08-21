import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {isbn13} = book
    return (
        <Link to={`/books/${isbn13}`}>
        <div className='overflow-hidden rounded-md  shadow-md relative transition duration-300 transform hover:-translate-y-3'>
            <img src={book.image} className=' object-cover w-full  h-56 md:h-64 xl:h-80 border border-gray-200 ' alt="" />
            <div className='absolute inset-0 bg-black opacity-0 hover:opacity-100 p-5 bg-opacity-75 text-gray-300 flex flex-col'>
                    <h1>{book.title}</h1>
                    <br />
                    <p>{book.subtitle.substring(0,20)}...</p>
                    <p className='text-orange-500'>{book.price}</p>
                    <p className='mt-auto btn bg-gray-900 hover:bg-gray-700 inline-block text-center pt-3'>View Detail</p>

            </div>
        </div>
        </Link>
    );
};

export default Book;