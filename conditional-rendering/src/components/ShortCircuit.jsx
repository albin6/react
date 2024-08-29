import React, { Component } from 'react'

class ShortCircuit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: true
        }
    }
    render() {
        return (
            <div style={{ border: "1px solid white", padding: "0 20px", margin: "10px" }}>
                <h4>Using Element Variable</h4>
                {
                    this.state.isLogged && <h2>User Logged in</h2>
                }
            </div>
        )
    }
}

export default ShortCircuit