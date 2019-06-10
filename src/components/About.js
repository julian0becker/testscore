import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Link to={"/"}>
          <i className="fas fa-chevron-left fa-2x title ml-4 mt-3" />
        </Link>
        <h1 className="title mr-5 ">About</h1>
        <div />
      </div>
      <div className="d-flex justify-content-center">
        <ul className="list-group about-list mt-3">
          <li className="list-group-item">
            Hi, welcome to Testify. This is an Web Application for teachers to
            keep track of their students' test results. On the landing page
            teachers are able to create different classrooms and subsequently to
            add students within these.To DELETE an entire classroom double click
            the "x" next to the classroom name.
          </li>
          <li className="list-group-item">
            BEWARE! This project is not connected to any database. All data is
            saved locally on your browser. This means you will lose all data, if
            you clear your browser.
          </li>
          <li className="list-group-item">
            The app converts reached points on a test directly to a grade. For
            now, the German University scale and the American scale have been
            implemented. Click here to see how these scale work: <br />
            <div className="d-flex justify-content-center">
              <Link to={"/scales"}>
                <button className="btn btn-outline-secondary btn-sm">
                  Scales
                </button>
              </Link>
            </div>
          </li>
          <li className="list-group-item">
            To build this project I have used React and Redux with hooks.
            Styling has been done with Bootswatch.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default About;
