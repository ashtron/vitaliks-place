import React from "react"

class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "#000000"
        }
    }

    handleMouseDown = (event) => {
        event.preventDefault()

        this.setState({ color: this.props.selectedColor })

        this.props.updateGrid(this.props.selectedColor, this.props.id)
    }

    render() {
        return (
            <div
                className="pixel"
                onMouseDown={this.handleMouseDown}
                style={{backgroundColor: this.state.color}}
            ></div>
        )
    }
}

export default Pixel