import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "../../index.css";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.books?.isLoading);
  const { state } = useLocation();
  const previousPath = state?.from ? state.from : "/";
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate(previousPath);
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <section className="register">
      {isLoading ? (
        <div className="loading">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="register-container">
          <h1>Sign In</h1>
          <div>
            <form onSubmit={onSubmit} className="form">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <button type="submit">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default SignIn;
