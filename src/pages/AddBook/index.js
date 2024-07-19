import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewBook } from "../../features/book/bookSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, title };
    dispatch(addNewBook(body));
    setTimeout(() => {
      navigate("/book");
    }, 2000);
  };

  return (
    <section className="section">
      <div className="section-container">
        <div className="section-container-title">
          <h2>Add Post</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="container-item">
            <label>Author</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="container-item">
            <label>Name</label>
            <textarea
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button>Add Blog</button>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
