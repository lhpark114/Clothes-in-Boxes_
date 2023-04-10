import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <Link to="/newpage">
        <h1>Create Box</h1>
      </Link>
    </header>
  );
}
