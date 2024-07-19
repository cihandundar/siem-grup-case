import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import logo from "../../assets/logo.webp";
import "../../index.css";
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const onLogout = async () => {
    await dispatch(logout());
    await dispatch(reset());
    navigate("/signin");
  };
  console.log(user?.user);
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        {user?.user ? (
          <ul className="nav-list">
            <li className="nav-list-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-list-link">
              <NavLink to="/post">Post</NavLink>
            </li>
            <li className="nav-list-link">
              <NavLink to="/addpost">Add Post</NavLink>
            </li>

            <li className="nav-list-link">
              <button onClick={onLogout} className="logout">
                Logout
              </button>
            </li>
            <li></li>
          </ul>
        ) : (
          <ul className="nav-list">
            <li className="nav-list-link">
              <NavLink to="/signin">Sign In</NavLink>
            </li>
            <li className="nav-list-link">
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
