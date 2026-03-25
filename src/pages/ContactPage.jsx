import React from "react";

const ContactPage = () => {
  return (
    <div className="container py-5">
      <h1>Contact Us</h1>
      <form className="row mt-4">
        <div className="col-md-6 mb-3">
          <input className="form-control" placeholder="Name"/>
        </div>
        <div className="col-md-6 mb-3">
          <input className="form-control" placeholder="Email"/>
        </div>
        <div className="col-12 mb-3">
          <textarea className="form-control" rows="4" placeholder="Message"/>
        </div>
        <button className="btn btn-warning">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;