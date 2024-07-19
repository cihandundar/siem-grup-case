import { fetchBook } from "../../features/book/bookSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
const Book = () => {
  const data = useSelector((state) => state.books.data);
  const isLoading = useSelector((state) => state?.books?.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  return (
    <section>
      <div className="container">
        <h1>Book List</h1>
        {isLoading ? (
          <div className="loading">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="wrapper">
            {data.map((book) => (
              <div key={book.id} className="cart">
                <div className="cart-image">
                  <img src={book.imageURL || book.avatar} alt={book.title} />
                </div>
                <div className="cart-title">
                  <h3>{book.title}</h3>
                </div>
                <div className="cart-name">
                  <p>{book.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Book;
