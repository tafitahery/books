import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBook = async () => {
      try {
        const { data } = await axios.get('http://localhost:8800/books');
        setBooks(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBook();
  }, []);

  return (
    <div>
      <h1>Lebo Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  );
}
