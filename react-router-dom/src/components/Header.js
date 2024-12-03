import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  let activeLinkStyle = (obj) => {};
  return (
    <div>
      <nav className="nav-tag">
        <ul className="main-ul">
          <li>
            <NavLink
              style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }} 
              to="/"
            >
              <img src="./images/flipcartLogo.jpeg"></img>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="category" to="/">
            <NavLink style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }}> Category</NavLink>
            <ul className="dropdown">
              <li>
                <NavLink style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }} to="/Fashion">Fashion</NavLink>
              </li>
              <li>
                <NavLink style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }} to="/Mobiles">Mobiles</NavLink>
              </li>
              <li>
                <NavLink style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }} to="/Electronics">Electronics</NavLink>
              </li>
              <li>
                <NavLink style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }} to="/Grocery">Grocery</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <input className="search-input" placeholder="search for products" />
          </li>

          <li>
            <button className="search-btn">Search</button>
          </li>

          <li className="category">
            <NavLink  style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }} > More</NavLink>
            <ul className="dropdown">
              <li>
                <NavLink style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }} to="/Login">Login</NavLink>
              </li>
              <li>
                <NavLink style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }} to="/Signup">Signup</NavLink>
              </li>
              <li>
                <NavLink style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }} to="/Logout">Logout</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink  style={(obj) => {
                if (obj.isActive == true) {
                  return { backgroundColor: "white", color: "#575252" };
                }
              }} to="/Cart">cart</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
