import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <>
      <header style={style.header}>
        <nav style={style.navbar}>
          <Link to={'/'} style={style.navLink}>
            <h2>Markdown Editor</h2>
          </Link>
          <ul className="nav-items" style={style.navItems}>
            <li className="nav-item">
              <a href="nav-link" style={style.navLink}>
                <span style={style.span}>Preview As</span>
                <FontAwesomeIcon icon={faCaretDown} />
              </a>
            </li>
            <li className="nav-item">
              <a href="nav-link" style={style.navLink}>
                <span style={style.span}>Download As</span>
                <FontAwesomeIcon icon={faCaretDown} />
              </a>
            </li>
            <li className="nav-item">
              <a href="nav-link" style={style.navLink}>
                Markdown Guide
              </a>
            </li>
            <li className="nav-item">
              <Link to={'/contact'} style={style.navLink}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a href="nav-link" style={style.navLink}>
                <FontAwesomeIcon icon={faPlus} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

const style = {
    header: {
        backgroundColor: '#373d49',
        color: '#ddd',
        fontSize: '15px'
  },
  navbar: {
    width: "90%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navItems: {
    width: "60%",
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
  },
  navLink: {
    textDecoration: "none",
    color: "#ddd",
    display: "flex",
    alignItems: "center"
  },
  span: {
    paddingRight: '5px'
  },
};

export default Header;
