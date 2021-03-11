import React from "react";

function Hero() {
  return (
    <div className="container border my-5">
      <div className="row my-5 mb-4">
        <div className="col">
          <img
            src="../../../img/google-books-logo.png"
            className="img-fluid"
            alt=""
            width="25%"
            height="auto"
          />
          <p className="fs-5 fw-bold pt-3">Search & Save Books of Interest</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
