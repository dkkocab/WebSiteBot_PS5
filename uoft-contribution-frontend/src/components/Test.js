import React, {Component} from 'react';

//This is to test the render from the redirection
class Test extends Component {

    render() {
        // const { data } = this.props.match.params
        const data1 = this.props.match.params.id;
        const data2 = this.props.location.state;
        console.log(this.props.match.params.id)
        console.log(this.props.location.state)
        return (
            <div>
                <a> this is : {data1} </a>
                <br/>
                <a> this is : {data2} </a>
            </div>
        );
    }
}

export default Test;