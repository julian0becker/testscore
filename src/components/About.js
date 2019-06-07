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
        <h1 className="title mr-3 ">About Testify</h1>
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
            The app converts reached points on a test directly to a grade. In
            the future I will implement different scales. For now, the German
            University scale is used: <br />
            {"x = score in percent [(reached points / total points) * 100]"}
            <div className=" mt-3 score-tables">
              <div className="table">
                <h6>Passmark 50%</h6>
                <ul className="list-unstyled">
                  <li>{"95% ≤ x ≤ 100% = 1,0"}</li>
                  <li>{"90% ≤ x < 95% =  1,3"}</li>
                  <li>{"85% ≤ x < 90% =  1,7"}</li>
                  <li>{"80% ≤ x < 85% =  2,0"}</li>
                  <li>{"75% ≤ x < 80% =  2,3"}</li>
                  <li>{"70% ≤ x < 75% =  2,7"}</li>
                  <li>{"65% ≤ x < 70% =  3,0"}</li>
                  <li>{"60% ≤ x < 65% =  3,3"}</li>
                  <li>{"55% ≤ x < 60% =  3,7"}</li>
                  <li>{"50% ≤ x < 55% =  4,0"}</li>
                  <li>{"0% ≤ x < 50% =   5,0"}</li>
                </ul>
              </div>
              <div className="table-words">
                <h6 style={{ visibility: "hidden" }}>{"Words"}</h6>
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-center">
                    {"very good"}
                  </li>
                  <li className="d-flex justify-content-center">{"↓"}</li>
                  <li className="d-flex justify-content-center">{"↑"}</li>
                  <li className="d-flex justify-content-center">{"good"}</li>
                  <li className="d-flex justify-content-center">{"↓"}</li>
                  <li className="d-flex justify-content-center">{"↑"}</li>
                  <li className="d-flex justify-content-center">
                    {"satisfactory"}
                  </li>
                  <li className="d-flex justify-content-center">{"↓"}</li>
                  <li className="d-flex justify-content-center">{"↑"}</li>
                  <li className="d-flex justify-content-center">
                    {"sufficient"}
                  </li>
                  <li className="d-flex justify-content-center">{"fail"}</li>
                </ul>
              </div>
              <div className="table">
                <h6>Passmark 60%</h6>
                <ul className="list-unstyled">
                  <li>{"96% ≤ x ≤ 100% = 1,0"}</li>
                  <li>{"92% ≤ x < 96% =  1,3"}</li>
                  <li>{"88% ≤ x < 92% =  1,7"}</li>
                  <li>{"84% ≤ x < 88% =  2,0"}</li>
                  <li>{"80% ≤ x < 84% =  2,3"}</li>
                  <li>{"76% ≤ x < 80% =  2,7"}</li>
                  <li>{"72% ≤ x < 76% =  3,0"}</li>
                  <li>{"68% ≤ x < 72% =  3,3"}</li>
                  <li>{"64% ≤ x < 68% =  3,7"}</li>
                  <li>{"60% ≤ x < 64% =  4,0"}</li>
                  <li>{"0% ≤ x < 60% =   5,0"}</li>
                </ul>
              </div>
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
