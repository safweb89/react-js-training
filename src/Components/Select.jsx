import React from "react";
import "./select.css";

export default function Select(props) {
  return (
    <div className="custom-select">
      <select onChange={props.handleChange} value="props.file">
        <option value={"./sampledata.json"}> sample Data</option>
        <option value={"./secondSample.json"}> value 2</option>
        <option value={"./sample three.json"}> value 3</option>
      </select>
    </div>
  );
}
