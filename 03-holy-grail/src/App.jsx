import "./App.css";

import React from "react";

function App() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="logo">
            {" "}
            <h1>My website</h1>
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="main">
          <div className="left">
            <div className="menu">
              <h3>Menu</h3>
            </div>

            <ul>
              <li>Dashboard</li>
              <li>Profile</li>
              <li>Analytics</li>
              <li>Products</li>
              <li>Orders</li>
              <li>Customers</li>
              <li>Messages</li>
              <li> Calendar</li>
              <li>Reports</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>

          <div className="middle">
            <p>
              
              Welcome to Our Website this is the main content.Practice CSS
              Grid...
            </p>
          </div>

          <div className="right">
            <p>Recemts Posts</p>
            <p>Ads</p>
            <p>News</p>
          </div>
        </div>

        <div className="footer">
          <p> &copy; 2026 My Website | All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default App;
