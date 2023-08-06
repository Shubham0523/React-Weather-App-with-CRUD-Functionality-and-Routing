import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Crud = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editFname, setEditFname] = useState("");
  const [editLname, setEditLname] = useState("");
  const navigate = useNavigate()

  const addData = () => {
    if (fname.length === 0 || lname.length === 0) {
      alert("Empty Value");
    } else {
      setData([...data, { fname, lname }]);
      setLname("");
      setFname("");
    }
  };

  const removeData = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const changeVal = (index, value) => {
    setEditIndex(index);
    setEditFname(value.fname);
    setEditLname(value.lname);
  };

  const updateData = () => {
    const newData = [...data];
    newData[editIndex] = { fname: editFname, lname: editLname };
    setData(newData);
    setEditIndex(-1);
    setEditFname("");
    setEditLname("");
  };

  return (
    <div className="container">
          <button className="home-btn" onClick={()=>{navigate('/')}}>Home</button>
      <input
        value={fname}
        onChange={(e) => {
          setFname(e.target.value);
        }}
        type="text"
        placeholder="First Name"
      />
      <input
        value={lname}
        onChange={(e) => {
          setLname(e.target.value);
        }}
        type="text"
        placeholder="Last Name"
      />
      <button className="add-btn" onClick={addData}>Add</button>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            {editIndex === index ? (
              <>
                <input
                  value={editFname}
                  onChange={(e) => setEditFname(e.target.value)}
                />
                <input
                  value={editLname}
                  onChange={(e) => setEditLname(e.target.value)}
                />
                <button className="save" onClick={updateData}>Save</button>
              </>
            ) : (
              <>
                <h1>
                  {item.fname} {item.lname}
                </h1>
                <button className="delete" onClick={() => removeData(index)}>Delete</button>
                <button className="edit" onClick={() => changeVal(index, item)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
