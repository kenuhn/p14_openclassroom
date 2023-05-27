import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo_hrnet.png";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <h1 onClick={() => navigate("./")} style={{ cursor: "pointer" }}>
        {" "}
        HRNET
      </h1>
      <nav>
        <ul>
          <li onClick={() => navigate("./")} >
           Formulaire
          </li>
          <li onClick={() => navigate("/Employe")} >
          Employe
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
