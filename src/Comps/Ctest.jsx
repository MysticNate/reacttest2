import { Component } from "react";

export default class Ctest extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            sum: 0,
        };
    }

    num1 = (e) => {
        this.setState({num1: Number(e.target.value)});

    }

    num2 = (e) => {
        this.setState({num2: Number(e.target.value)});

    }

    btnSum = () => {
        this.setState({ sum: this.state.num1 + this.state.num2 });
    }

    render() {
        let sum = this.num1 + this.num2;

        return (
            <div>
                <input type="number" onChange={this.num2} />
                <input type="number" onChange={this.num1} />
                <button onClick={this.btnSum}>
                    sum
                </button>

                {this.state.sum}
            </div>
        );
    }
}