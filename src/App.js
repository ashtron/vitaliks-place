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

  handleChange = (newColor) => {
    this.setState({ selectedColor: newColor })
  }

  handlePixelClick = (event) => {
    console.log(event)
  }

  render() {
    return (
      <div>
        <HexColorPicker color={this.state.selectedColor} onChange={this.handleChange} />
        <Canvas handleClick={this.handlePixelClick} selectedColor={this.state.selectedColor} />
      </div>
    )
  }
}

export default App