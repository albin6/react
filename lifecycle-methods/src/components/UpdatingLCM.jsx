import React, { Component } from 'react'

class UpdatingLCM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Albin'
        }
        console.log('Updating Phase from Constructor')
    }
    static getDerivedStateFromProps(state, props) {
        console.log('Updating Phase from getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate() {
        console.log('Updating Phase from shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Updating Phase from getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('Updating Phase from componentDidUpdate')
    }
    changeState = (e) => {
        this.setState({
            name: 'Albin Aji'
        })
    }
    render() {
        return (
            <div>
                UpdatingLCM
                <br />
                <button onClick={this.changeState}>Update state</button>
            </div>
        )
    }
}

export default UpdatingLCM