import React, {Component} from 'react';

class Buttons extends Component
{
  
  constructor(props){
    super(props);
    this.handleclicks = this.handleclicks.bind(this);
  }


  handleclicks = (event)=>{
       this.props.Buttonclicked(event.target.value)
  }

  render(){
        return(
            <div className="buttons">
              <div className="row1">
              <button className="btn btn-action" onClick={this.handleclicks} value="∛x">∛x</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="log">log<sub>y</sub>x</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="del">del</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="(">﹙</button>
              <button className="btn btn-action" onClick={this.handleclicks} value=")">﹚</button>
            </div>
             <div className="row2">
              <button className="btn btn-action" onClick={this.handleclicks} value="exp">exp</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="n!">n!</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="2^x">2^x</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="e^x">e^x</button>
              <button className="btn btn-calc" onClick={this.handleclicks} value="**">x^y</button>
              
            </div>
            <div className="row3">
              <button className="btn btn-action" onClick={this.handleclicks} value="|x|">|x|</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="ln">ln</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="10^x">10^x</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="π">π</button>
              <button className="btn btn-calc" onClick={this.handleclicks} value="x^3">x^3</button>
            </div>
            
            <div className="row5">
            <button className="btn btn-action" onClick={this.handleclicks} value="logx">log</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="c">C</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="+/-">+/-</button>
              <button className="btn btn-action" onClick={this.handleclicks} value="%">%</button>
              <button className="btn btn-calc" onClick={this.handleclicks} value="/">÷</button>
            </div>
            <div className="row6">
            <button className="btn btn-action" onClick={this.handleclicks} value="e">e</button>
              <button className="btn" onClick={this.handleclicks} value="7">7</button>
              <button className="btn" onClick={this.handleclicks} value="8">8</button>
              <button className="btn" onClick={this.handleclicks} value="9">9</button>
              <button className="btn btn-calc" onClick={this.handleclicks} value="*">x</button>
            </div>
            <div className="row7">
            <button className="btn btn-action" onClick={this.handleclicks} value="1/x">1/x</button>
              <button className="btn" onClick={this.handleclicks} value="4">4</button>
              <button className="btn" onClick={this.handleclicks} value="5">5</button>
              <button className="btn" onClick={this.handleclicks} value="6">6</button>
              <button className="btn btn-calc" onClick={this.handleclicks} value="-">-</button>
            </div>
            <div className="row8">
            <button className="btn btn-action" onClick={this.handleclicks} value="x^2">x^2</button>
              <button className="btn" onClick={this.handleclicks} value="1">1</button>
              <button className="btn" onClick={this.handleclicks} value="2">2</button>
              <button className="btn" onClick={this.handleclicks} value="3">3</button>
              <button className="btn btn-calc" onClick={this.handleclicks} value="+">+</button>
            </div>
            <div className="row9">
            <button className="btn btn-action" onClick={this.handleclicks} value="√x">√x</button>
              <button className=" btn-0" onClick={this.handleclicks} value="0">0</button>
              <button className="btn" onClick={this.handleclicks} value=".">.</button>
              <button className="btn btn-calc" onClick={this.handleclicks} value="=">=</button>
            </div>
          </div>
        )
    }

}

export default Buttons;