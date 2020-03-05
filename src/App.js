import React from 'react';
import './App.css';
import Count from "./components/count/Count";
import Buttons from "./components/buttons/Buttons";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            data: null,
            value: null,
        };
    };

    countFunc = (i) => {
        if (i) {
            let numb = this.state.count + parseInt(i);
            numb >= 0 && this.setState({count: numb});
        } else {
            this.setState({count: i});
        }
    };

    enterInput = (event) => {
        this.setState({value: event.target.value})
    };

    render() {
        let {count, value} = this.state;

        return (
            <div className="App">
                <Count count={count}/>
                <Buttons funcCount={this.countFunc} value={value} enter={this.enterInput}/>
                {/*<Button myFunc={this.countFunc.bind(null,1)} nameButton={'+1'}/>
                    <Button myFunc={() => this.countFunc(1)} nameButton={'+1'}/>
                    <Button myFunc={this.countFunc.bind(null, -1)} nameButton={'-1'}/>
                    <Button myFunc={this.countFunc.bind(null, 100)} nameButton={'+100'}/>
                    <Button myFunc={this.countFunc.bind(null, -100)} nameButton={'-100'}/>
                    <Button myFunc={this.countFunc.bind(null, 0)} nameButton={'AC'}/>*/}
                {/*<Input value={this.state.value} enter={this.enterInput}/>
                    <Button myFunc={this.countFunc.bind(null, value)} nameButton={'+'}/>*/}
            </div>
        )
    }
};

export default App;
