import  React from 'react';

export default function search({handleChange, handleSubmit}) {
  return (
    <div>
           <form className="form-inline my-2 my-lg-0" onSubmit = {handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange = {handleChange}
            />    
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              buscar
            </button>
          </form>
    </div>
  );
};