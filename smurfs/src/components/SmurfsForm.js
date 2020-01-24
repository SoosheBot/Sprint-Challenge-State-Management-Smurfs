import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurfs } from "../store/actions";

export const SmurfsForm = (props) => {
  const [smurfsCount, setSmurfsCount] = useState(0);
  const [item, setItem] = useState({ name: "", age: "", height: "", id: "" });

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  const handleChanges = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.height]: e.target.value,
      [e.target.id]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addSmurfs(item);
    setSmurfsCount(smurfsCount + 1);
  };

  return (
    <div className="smurf-form">
      <form onSubmit={submitForm}>
      <input className='name-input' name='name' placeholder='Add a name here...' onChange={handleChanges}/>
                <input className='age-input' name='age' placeholder='Add the age now...' onChange={handleChanges}/>
                <input className='height-input'  name='height' placeholder='Finally, add a height...' onChange={handleChanges}/>
                <button type='submit'>Add New Smurf to the Village</button>
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
