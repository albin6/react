import React, { Component } from 'react'

class MountingLCM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Albin'
        }
        console.log('Mounting Phase Constructor')
    }
    static getDerivedStateFromProps(state, props) {
        console.log('Mounting Phase getDerivedStateFromProps')
        return null // it should return new state or null
    }
    componentDidMount() {
        console.log('Mounting phase from componentDidMount')
    }

    render() {
        console.log('Mounting phase from render')
        return (
            <div>MountingLCM</div>
        )
    }
}

export default MountingLCM