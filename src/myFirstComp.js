import React, {Component, Fragment } from "react";
import Button from "./components/button.js"
import Display from "./components/display.js"
const buttons= ["9","8","7","6","5","4","3","2","1","0","+","-","*","/","="]

class MyFirstComp extends Component{
    constructor (props){
        super(props);
        this.state={
            displayValue:""
        }

    }

    changeDisplay=(val)=> {
        let oldValue = this.state.displayValue;
        let newValue = oldValue+val;
        this.setState({displayValue : newValue});
        
    }    


    /*render(){
        return(
            <Fragment>
                <h1>
                    Calculator
                </h1>
                <Display value={this.state.displayValue} />
                {
                    buttons.map((data,i)=>{
                        return(
                            <Fragment>
                            {(i%3===0)?  <br/>  : null}
                            <Button handleClick= {this.changeDisplay} key={i} label={data}/>
                            </Fragment>
                        )
                    }
                    )
                }
            </Fragment>
        )
    }*/
    render(){
        return(
            <Fragment>
                <h1>Hello world</h1>
                <Display value={this.state.displayValue} />
                {
                    buttons.map((data,i)=>{
                       
                        return(

                            <Button handleClick={this.changeDisplay}  key={i} label={data}/>
                        )
                    })
                }
            </Fragment>
        )
    }

}
export default MyFirstComp