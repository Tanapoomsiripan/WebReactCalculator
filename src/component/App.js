import React, {
  Component
} from "react";
import Buttons from './buttons';
import Result from './result';
import "./calc.css";
import {
  cbrt, log,  pow, sqrt ,exp
} from 'mathjs'
/**this is the main class */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
    }
    this.handleclicks = this.handleclicks.bind(this);
  }

  handleclicks = (value) => {
    var number1 = 0;
    var number2 = 0;
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case '+':
      case '-':
      case '/':
      case '*':
      case '**':  
      case '(':
      case ')':
        if (this.state.result === "0") {
          this.setState({
            result: value
          });

        } else {
          this.setState({
            result: this.state.result + value
          });
        }
        break;
      case 'log':
        number1 = log(parseFloat(this.state.result, 10));
        console.log(number1);
        
        this.setState({
          result: this.state.result + value
        });
        
        
        break;
      case '=':
        //todo add a regex test to see if the statment is correct before passing it to eval
        //todo limit the result  to 14
        console.log(this.state.result);
        
        this.setState({
          result: eval(this.state.result)
        })
        break;
      case 'c':
        this.setState({
          result: '0'
        })
        break;
      case '+/-':
        if(this.state.result==0){
          this.setState({
            result: ('-')
          });}
        else if(this.state.result=='-'){
            this.setState({
            result: ('+')
          });
        }
        else if(this.state.result=='+'){
          this.setState({
          result: ('-')
        });}else{
        this.setState({
          
          result: parseInt(this.state.result,10) * -1
        });}
        break;
      case '%':
        this.setState({
          result: parseFloat(this.state.result, 10) / 100
        });
        break;
      case 'e':
        this.setState({
          result: (2.718281828459)
        });
        break;
      case '1/x':
        this.setState({
          result: 1 / parseFloat(this.state.result, 10) 
        });
        break;
      case 'logx':
        this.setState({
            result: log(parseFloat(this.state.result, 10),10) 
          });
          break;
      case 'x^2':
        this.setState({
            result: pow(parseFloat(this.state.result, 10),2)
              });    
              break;
      case '10^x':
        this.setState({
          
            result: pow(10,parseFloat(this.state.result, 10))
              });    
              break;
      case '|x|':
        this.setState({
            result: sqrt(pow(parseFloat(this.state.result, 10),2))
              });    
              break;
      case 'ln':
          this.setState({
            result: log(parseFloat(this.state.result, 10)) 
                });
                break;
      case '√x':
          this.setState({
            result: sqrt(parseFloat(this.state.result, 10))
                });
                break;
      case 'π':
          this.setState({
             result: (3.1415926535)
                });
                break;
      case 'x^3':
          this.setState({
              result: pow(parseFloat(this.state.result, 10),3)
                });    
                break;  
      case '2^x':
          this.setState({
              result: pow(2,parseFloat(this.state.result, 10))
                });    
                break; 
      case 'e^x':
          this.setState({
              result: pow(2.71828,parseFloat(this.state.result, 10))
                });    
                break; 
                
      case 'del':
          if (this.state.result.length > 0) {
            const newResult = this.state.result.slice(0, -1);
              if (newResult.length === 0) {
                this.setState({
                    result: '0'
                });
              } else {
                this.setState({
                    result: newResult
                 });
               }
          }
      break;         
      case '∛x':
          this.setState({
              result: cbrt(parseFloat(this.state.result, 10))
                 });    
                break;   
      case 'n!' :
        var num = parseFloat(this.state.result, 10) ;
        function fac(num){
          if(num==0 || num ==1){
            return 1;
          }else{
            return num * fac(num-1);
          }
        }
        this.setState({
          result: fac(num)
             });  
        break;  
        case 'exp':
          this.setState({
              result: exp(parseFloat(this.state.result, 10))
                 });    
                break;  

       
      default:
        break;
    }

  }

  render() {
    return ( <
      div className = "myCalculator" >
      <
      Result result = {
        this.state.result
      }
      /> <
      Buttons Buttonclicked = {
        this.handleclicks
      }
      /> <
      /div>
    );
  }
}

export default App;