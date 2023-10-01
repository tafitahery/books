import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: 0,
    cover: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/books', {
        ...book,
        price: parseInt(book.price),
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form>
        <h1>Add New Book</h1>
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          name="desc"
          type="text"
          placeholder="desc"
          onChange={handleChange}
        />
        <input
          name="price"
          type="number"
          placeholder="price"
          onChange={handleChange}
        />
        <input
          name="cover"
          type="text"
          placeholder="cover"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}
