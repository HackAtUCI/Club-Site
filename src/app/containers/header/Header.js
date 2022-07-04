import React from "react";

import "./Header.scss";

function Header({ title, children }) {
  return (
    <header className="global-header">
      <div className="header-image">
        <div className="header-overlay">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
