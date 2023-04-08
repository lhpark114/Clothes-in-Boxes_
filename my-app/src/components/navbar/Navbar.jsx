import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section>
      <Link to="/newpage">
        <h1>Create Box</h1>
      </Link>
    </section>
  );
}
