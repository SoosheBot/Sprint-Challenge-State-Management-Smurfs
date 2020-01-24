import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurfs } from "../store/actions";

export const SmurfsForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "", id: "" });

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  const handleChanges = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addSmurfs(newSmurf);

  };

  return (
    <div className="smurf-form">
      <form onSubmit={submitForm}>
      <input className='name-input' name='name' placeholder='Add name here...' type='text' onChange={handleChanges}/>
    <input className='age-input' name='age' type='number' placeholder='Add an age ...' onChange={handleChanges}/>
    <input className='height-input' name='height' placeholder='Finally, add a height...' type='number' onChange={handleChanges}/>
    <button type='submit'>Add New Smurf</button>
    <button type='submit'>Delete Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting,
        smurfs: state.smurfs,
    }
}
export default connect(mapStateToProps, {fetchSmurfs, addSmurfs})(SmurfsForm);

