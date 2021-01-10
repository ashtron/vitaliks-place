import React from "react"
import { HexColorPicker } from "react-colorful"
import "react-colorful/dist/index.css"
import Canvas from "./Canvas"
import "./index.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedColor: "#ffffff",
      pixelGrid: new Array(100).fill("#000000")
    }
  }

  updateGrid = (color, pixelId) => {
    this.setState(prevState => {
      let newPixelGrid = [...prevState.pixelGrid]
      newPixelGrid[pixelId] = color

      return {
        pixelGrid: newPixelGrid
      }
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.pixelGrid}</h3>
        <HexColorPicker
          color={this.state.selectedColor}
          onChange={(newColor) => this.setState({ selectedColor: newColor })}
        />
        <Canvas selectedColor={this.state.selectedColor} updateGrid={this.updateGrid} />
      </div>
    )
  }
}

export default App