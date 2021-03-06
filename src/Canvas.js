import React from "react"
import Pixel from "./Pixel"

class Canvas extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const pixels = []

        for (let i = 0; i < 100; i++) {
            pixels.push(
                <Pixel
                    key={i}
                    id={i}
                    selectedColor={this.props.selectedColor}
                    updateGrid={this.props.updateGrid}
                />
            )
        }
    
        return (
            <div
                className="wrapper">
                { pixels }
            </div>
        )
    }
}

export default Canvas