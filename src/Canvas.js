import React from "react"
import Pixel from "./Pixel"

function Canvas(props) {
    const pixels = []

    for (let i = 0; i < 1000; i++) {
        pixels.push(
            <Pixel handleClick={props.handleClick} selectedColor={props.selectedColor} />
        )
    }

    return (
        <div className="wrapper">
            { pixels }
        </div>
    )
}

export default Canvas