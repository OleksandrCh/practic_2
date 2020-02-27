import React from 'react';
import './App.css';
import Count from "./components/count/Count";
import Button from "./components/button/Button";
import Input from "./components/inputtext/Input";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            count: 0,
            data: null,
            value: "",
        }
        // this.hadler = this.hadler.bind(this); использовать стрелочную функцию
    };

    // state = {   можно и тут писать state, а не в конструкторе класса
    //     count: 1,
    //     data: null
    // };

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps');
        console.log(prevProps);

        console.log('prevState');
        console.log(prevState);
    }

    countFunc = (i) => {
        let numb = this.state.count + i;
        numb >= 0 && this.setState({count: numb});
    };

    enterInput = (event) => {
        this.setState({value: event.target.value})
    };

    render() {
        console.log('render');
        let {count, data} = this.state;

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
                    <Input  value={this.value} enter={this.enterInput}/>
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
