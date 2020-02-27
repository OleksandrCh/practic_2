import React from 'react';
import './App.css';
import Count from "./components/count/Count";
import Button from "./components/button/Button";
import Input from "./components/inputtext/Input";

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
        let numb = this.state.count + parseInt(i);
        numb >= 0 && this.setState({count: numb});
    };

    enterInput = (event) => {
        this.setState({value: event.target.value})
    };

    render() {
        let {count, value} = this.state;

        return (
            <div className="App">
                <div>
                    <Count count={count}/>
                </div>
                <div>
                    <Button myFunc={this.countFunc.bind(null,1)} nameButton={'+1'}/>
                    <Button myFunc={this.countFunc.bind(null,-1)} nameButton={'-1'}/>
                    <Button myFunc={this.countFunc.bind(null,100)} nameButton={'+100'}/>
                    <Button myFunc={this.countFunc.bind(null,-100)} nameButton={'-100'}/>

                </div>
                <div>
                    <Input  value={this.state.value} enter={this.enterInput}/>
                    <Button myFunc={this.countFunc.bind(null, value)} nameButton={'+'}/>
                </div>

            </div>
        )
    }
};

// function App({Msg,func}) {
//     console.log(Msg);
//     func();
//     return (
//         <div className="App">
//             <h1>{Msg}</h1>
//         </div>
//     );
// }
// function App(props) {
//     console.log('protps');
//     console.log(props);
//     return (
//     <div className="App">
//       <h1>{props.msg}</h1>
//     </div>
//   );
// }

export default App;
