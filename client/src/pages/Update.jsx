import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: 0,
    cover: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/books/${id}`, {
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
        <h1>Update the Book</h1>
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
        <button className="formButton" onClick={handleClick}>
          Update
        </button>
      </form>
    </div>
  );
}
