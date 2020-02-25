import React from 'react';
import './App.css';
import Count from "./components/count/Count";
import Button from "./components/button/Button";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            count: 0,
            data: null
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

    hadler = () => {
        this.setState({count: this.state.count + 1})
    };
    minusOne = () => {
        this.setState({count: this.state.count - 1})
    };
    plus100 = () => {
        this.setState({count: this.state.count + 100})
    };
    minus100 = () => {
        this.setState({count: this.state.count - 100})
    };


    render() {
        console.log('render');
        let {count, data} = this.state;

        return (
            <div className="App">
                <Count count={count}/>

                <Button myFunc={this.hadler} nameButton={'+1'}/>
                <Button myFunc={this.minusOne} nameButton={'-1'}/>
                <Button myFunc={this.plus100} nameButton={'+100'}/>
                <Button myFunc={this.minus100} nameButton={'-100'}/>
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
