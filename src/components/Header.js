import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link to={"/"}>
        <i class="fas fa-chevron-left fa-2x title ml-4" />
      </Link>
      <h1 className="title d-flex justify-content-center mr-3">{title}</h1>
      <div />
    </div>
  );
}
