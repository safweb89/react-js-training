import React from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import Select from "./Components/Select";
import "./App.css";
// import SlectComponent from "./SelectComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      fileContent: {}
    };
  }


  render() {
    console.log(this.state.file);

    // const fileToEdit = this.state.file && require(this.state.file);
    const thefile = this.state.file && require(`${this.state.file}`);
    return (
      <div className="App">
        <header className="App-header">
          <Select
            handleChange={e => this.setState({ file: e.target.value })}
            file={this.state.file}
          />
          <JSONInput
            id="a_unique_id"
            placeholder={thefile || {}}
            theme="light_mitsuketa_tribute"
            colors={{
              string: "#DAA520" // overrides theme colors with whatever color value you want
            }}
            locale={locale}
            height="800px"
            width="800px"
            onChange={(e) => this.setState({ fileContent: e.json })}

          />
          <button onClick={() => console.log(this.state)} >Save</button>
        </header>{" "}
      </div>
    );
  }
}

export default App;
