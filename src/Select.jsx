import React from "react";
import "./select.css";

export default function Select(props) {
  return (
    <div className="custom-select">
      <select onChange={props.handleChange} value={props.file}>
        <option>select a file</option>
        {props.data.map((item, index) => (
          <option key={index} value={`./files/${item}`}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
