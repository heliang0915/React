import React,{Component} from 'react';
var style= require('./Button.css');
class Button extends Component{
   render(){
      return(
        <button className='my-btn' onClick={this.handler.bind(this)}>我是按钮3</button>
      )
   }
   handler(){
    alert('按钮点击');
   }
}
export default Button;
