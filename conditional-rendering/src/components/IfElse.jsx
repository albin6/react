import React, { Component } from 'react'

class IfElse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogged: true
        }
    }

    render() {
        if (this.state.isLogged) {
            return(
                <div style={{border: "1px solid white", padding: "0 20px", margin:"10px"}}>
                    <h4>Using if-else</h4>
                    <h2>User Logged in</h2>
                </div>
            )
        } else {
            return (
                <div style={{border: "1px solid white", padding: "0 20px", margin:"10px"}}>
                    <h4>Using if-else</h4>
                    <h2>User not Logged in</h2>
                </div>
            )
        }
        // return (
        //     <div>
        //         <h2>User Logged in</h2>
        //         <h2>User not Logged in</h2>
        //     </div>
        // )
    }
}

export default IfElse