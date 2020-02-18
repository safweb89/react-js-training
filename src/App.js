import React from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import SlectComponent from "./SelectComponent";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ""
    };
  }
  render() {
    console.log(this.state.file);
    // const fileToEdit = this.state.file && require(this.state.file);
    const thefile = this.state.file && require(`${this.state.file}`);
    return (
      <div className="App">
        <header className="App-header">
          <p> Karoui JSON Editor </p>{" "}
          <SlectComponent
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
            height="550px"
          />
        </header>{" "}
      </div>
    );
  }
}

export default App;
