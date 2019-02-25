import React from "react";
const Footer = props => (
  <div className="p-5">
    <form action="POST" className="container-fluid  " id="contact-form">
      <div className="d-flex ">
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group flex-fill">
          <label for="inputName">Name</label>
          <input
            type="text"
            class="form-control form-control-sm"
            name="inputName"
          />
        </div>
        <div className="form-group ml-3 flex-fill">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control form-control-sm"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div className="form-group ">
        <label for="inputMessage">Message</label>
        <textarea
          class="form-control form-control-sm"
          name="inputMessage"
          rows="3"
        />
      </div>
      <div data-netlify-recaptcha />
      <div className="d-flex justify-content-center mb-2">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
    <div className="d-flex justify-content-center">
      <i className="d-flex align-items-center fab fa-github" />
      <a
        href="https://github.com/julian0becker"
        target="_blank"
        rel="noopener noreferrer"
      >
        julian0becker
      </a>
    </div>
  </div>
);
export default Footer;
