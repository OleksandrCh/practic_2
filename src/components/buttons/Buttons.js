import React, {Fragment} from 'react';
import Button from "../button/Button";
import Input from "../inputtext/Input";

function Buttons(props) {
    return (
        <Fragment>
            <Button myFunc={props.funcCount.bind(null, 1)} nameButton={'+1'}/>
            <Button myFunc={props.funcCount.bind(null, -1)} nameButton={'-1'}/>
            <Button myFunc={props.funcCount.bind(null, 100)} nameButton={'+100'}/>
            <Button myFunc={props.funcCount.bind(null, -100)} nameButton={'-100'}/>
            <Button myFunc={props.funcCount.bind(null, 0)} nameButton={'AC'}/>

            <Input value={props.value} enter={props.enter}/>
            <Button myFunc={props.funcCount.bind(null, props.value)} nameButton={'+'}/>
        </Fragment>
    );
}

export default Buttons;