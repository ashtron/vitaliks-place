import React from "react"

class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "#000000"
        }
    }

    handleClick = () => {
        console.log(this.props.selectedColor);
        this.setState({ color: this.props.selectedColor })
    }

    render() {
        return (
            <div
                className="pixel"
                onClick={this.handleClick}
                style={{backgroundColor: this.state.color}}
            ></div>
        )
    }
}

export default Pixel