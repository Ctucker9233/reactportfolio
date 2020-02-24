import React from "react";
import "./styles.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <a className="navbar-brand" href="/">
                Courtney Tucker
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".collapse" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                </button>
            <div className="collapse navbar-collapse">
                
                <a className="nav-item nav-link" href="/about">About Me</a>
                <a className="nav-item nav-link" href="/portfolio">Portfolio</a>
            </div>
        </nav>
    );
}

export default Nav;
