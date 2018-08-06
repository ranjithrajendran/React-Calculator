import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayValue:'',
            flag:0
        };
    }
    render(){
        return(
            <div className="calculator">
                <h1>CALCULATOR</h1>
                <input placeholder={this.state.displayValue} type="text"/>
                <Keypad callbackFromParent={this.myCallback}/>
            </div>
        );
    }
    myCallback=(buttonValue)=>
        { 
        if(buttonValue === '='){
            this.setState(prevState =>({
                displayValue:String(eval(prevState.displayValue)),
                flag:1
            }));     
        }
        else if(buttonValue === 'CLR'){
            this.setState(prevState =>({
                displayValue: '',
                flag:1
            }));     
        }
        else if(buttonValue === 'DEL'){
            this.setState(prevState =>({
                displayValue: prevState.displayValue.slice(0,-1),
                flag:1
            }));     
        }
        else{
            var text= buttonValue;
            this.setState(prevState => ({
                displayValue: prevState.displayValue.concat(text)
            }));
        }
    }
}
class Keypad extends React.Component{
    render(){
        return(
            <div className="keypad">
                {
                    ['DEL','CLR'].map((item)=>
                    <button value={item} onClick={() => {this.props.callbackFromParent(item)}}>{item}</button>
                    )
                }
                <button className="bigButton" value="=" onClick={() => {this.props.callbackFromParent('=')}}>=</button>
                {
                    [7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','%','/'].map((item)=>
                    <button value={item} onClick={() => {this.props.callbackFromParent(item)}}>{item}</button>
                    )
                }
            </div>);
    }
}
ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
);
