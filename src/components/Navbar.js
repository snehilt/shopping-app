import React from "react";
import "../App.css";
import { FiLogOut } from "react-icons/fi";

const Navbar = (props) => {
  const { token, setToken } = props;
  const logoutHandler = () => {
    setToken("");
    localStorage.clear();
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div
        class="container-fluid"
        style={{ justifyContent: `${token ? "space-between" : "center"}` }}
      >
        <h6 class="navbar-brand">Shopper's Stop</h6>
        {token && (
          <a class="navbar-brand logout">
            <FiLogOut onClick={logoutHandler} />
          </a>
        )}

        {/* <a class="navbar-brand" href="#">
          <h6 class="navbar-brand" style={{ color: "white" }}>Shopper's Stop</h6>
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
