import { PureComponent } from "react";

class NewComponent extends PureComponent {
    render() {
        console.log('pure component')
        return (
            <div>
                PureComponent
                <h2>pure {this.props.name}</h2>
            </div>
        )
    }
}

export default NewComponent