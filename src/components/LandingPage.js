import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LandingPage() {
  const classrooms = useSelector(state => state.classrooms);

  return (
    <div>
      <h1 className="title">Testify</h1>
      {classrooms.map(classroom => (
        <Link to={`/classroom/${classroom.id}`}>
          <button>{classroom.name}</button>
        </Link>
      ))}
    </div>
  );
}
