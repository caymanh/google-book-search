import React from "react";

function Card() {
  return (
    <div className="container my-3 border">
      <div className="row my-4 mx-2">
        <div className="col">
          <p className="text-start fw-bold">Harry Potter</p>
          <p className="text-start">Written by J K Rowling</p>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary btn-sm mx-2 float-end"
          >
            View
          </button>
          <button type="button" className="btn btn-primary btn-sm float-end">
            Save
          </button>
        </div>
      </div>
      <div className="row my-4 mx-2">
        <div className="col-3">
          <img
            src="../../../img/lFO3DAAAQBAJ.jpg"
            className="img-fluid float-start"
            alt=""
            width="50%"
            height="auto"
          />
        </div>
        <div className="col">
          <p className="text-start">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
