import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../../Book/Book';

const Books = () => {
    const  {books} = useLoaderData()
    // console.log(books)
    return (
        <div className='grid mt-10 lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8' >
            {
                books.map(book=><Book book={book}/>)
            }
        </div>
    );
};

export default Books;