import React from "react"
import Pixel from "./Pixel"

class Canvas extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isDrawing: false
        }
    }

    handleMouseDown = () => {
        this.setState({ isDrawing: true })
    }

    handleMouseUp = () => {
        this.setState({ isDrawing: false })
    }

    render() {
        const pixels = []

        for (let i = 0; i < 1000; i++) {
            pixels.push(
                <Pixel
                    handleClick={this.props.handleClick}
                    selectedColor={this.props.selectedColor}
                    isDrawing={this.state.isDrawing}
                />
            )
        }
    
        return (
            <div
                className="wrapper"
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
            > { pixels }
            </div>
        )
    }
}

export default Canvas