import React from "react"

class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "#000000"
        }
    }

    render() {
        return (
            <div
                className="pixel"
                onMouseDown={() => this.setState({ color: this.props.selectedColor })}
                style={{backgroundColor: this.state.color}}
            ></div>
        )
    }
}

export default Pixel