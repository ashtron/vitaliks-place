import React from "react"

class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "#000000"
        }
    }

    handleClick = () => {
        this.setState({ color: this.props.selectedColor })
    }

    handleMouseMove = () => {
        if (this.props.isDrawing) {
            this.setState({ color: this.props.selectedColor })
        }
    }

    render() {
        return (
            <div
                className="pixel"
                onClick={this.handleClick}
                onMouseMove={this.handleMouseMove}
                isDrawing={this.props.isDrawing}
                style={{backgroundColor: this.state.color}}
            ></div>
        )
    }
}

export default Pixel