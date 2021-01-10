import React from "react"
import { HexColorPicker } from "react-colorful"
import "react-colorful/dist/index.css"
import Canvas from "./Canvas"
import "./index.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedColor: "#ffffff"
    }
  }

  render() {
    return (
      <div>
        <HexColorPicker
          color={this.state.selectedColor}
          onChange={(newColor) => this.setState({ selectedColor: newColor })}
        />
        <Canvas selectedColor={this.state.selectedColor} />
      </div>
    )
  }
}

export default App