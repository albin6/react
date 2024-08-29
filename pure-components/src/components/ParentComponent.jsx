import React, { Component } from 'react'
import RegComponent from './RegComponent';
import NewComponent from './NewComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ReactJS'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'ReactJS'
            })
        }, 2000);
    }
    render() {
        return (
            <div>
                <RegComponent name={this.state.name} />
                <NewComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent