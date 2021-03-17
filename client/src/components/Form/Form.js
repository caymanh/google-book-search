import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form className="container">
      <div className="row">
        <div className="col-md-4 center">
          <input
            className="form-control "
            id="Title"
            type="text"
            value={q}
            placeholder="Enter a book title"
            name="q"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="row">
      <div className="col my-1">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-primary d-grid mx-auto my-2"
        >
          Search
        </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
