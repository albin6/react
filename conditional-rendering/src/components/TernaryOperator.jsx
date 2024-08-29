import React, { Component } from 'react'

class TernaryOperator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogged: false
        }
    }
    render() {
        return (
            <div style={{border: "1px solid white", padding: "0 20px", margin:"10px"}}>
                <h4>Using Ternary Operator</h4>
                {
                    this.state.isLogged ? <h2>User Logged in</h2> : <h2>User not Logged in</h2>
                }
            </div>
        )
    }
}

export default TernaryOperator