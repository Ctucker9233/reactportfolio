import React from "react";
import "./styles.css";

function Nav() {
    return (
        <nav className="navbar navbar-collapse bg-primary">
            <a className="navbar-brand" href="/">
                Courtney Tucker
      </a>
            <a className="nav-item nav-link" href="/about">About Me</a>
            <a className="nav-item nav-link" href="/portfolio">Portfolio</a>

        </nav>
    );
}

export default Nav;
