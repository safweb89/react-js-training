import React from "react";
import JSONInput from "react-json-editor-ajrm";
import axios from 'axios';
import locale from "react-json-editor-ajrm/locale/en";
import Select from "./Select";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputFile = React.createRef();
    this.state = {
      file: "",
      fileContent: {},
      allFiles: []
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8000/getAll").then(res => { // then print response status
      console.log(res.statusText, res)
      this.setState({ allFiles: res.data })
    })
  }

  onClickHandler = () => {
    const data = new FormData();
    const file = new File([this.state.fileContent], this.state.file.replace('./', '') || `${Date.now()}.json`, {
      type: "application/json",
    });
    data.append('file', file);
    axios.post("http://localhost:8000/upload", data, {
      // receive two    parameter endpoint url ,form data
    }).then(res => { // then print response status
      this.setState({ 'lastSave': Date.now() })
      console.log(res.statusText, res)
    })
  }


  render() {
    const { file, allFiles } = this.state;
    //const fileToEdit = this.state.file && require(this.state.file);
    //console.log(this.state, fileToEdit);
    const data = file && require(`${file}`);
    return (
      <div className="App">
        <header className="App-header">
          <Select
            handleChange={e => { console.log(e); this.setState({ file: e.target.value }) }}
            file={file}
            data={allFiles}
          />
          <JSONInput
            id="a_unique_id"
            placeholder={(file && data) || {}}
            theme="light_mitsuketa_tribute"
            colors={{
              string: "#DAA520" // overrides theme colors with whatever color value you want
            }}
            locale={locale}
            height="800px"
            width="800px"
            onChange={(e) => { console.log(e); this.setState({ fileContent: e.json }) }}
          />
          <input type="submit" onClick={this.onClickHandler} />
        </header>{" "}
      </div >
    );
  }
}

export default App;
