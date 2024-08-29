import { Component } from "react";

class RegComponent extends Component {
    render() {
        console.log('regular component')
        return (
            <div>
                RegularComponent
                <h3>Regular {this.props.name}</h3>
            </div>
        )
    }
}

export default RegComponent