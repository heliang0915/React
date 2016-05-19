'use strict';
// var com=require('./component.js');
// com();
//
import React, { Component } from 'react';
import {render} from 'react-dom';
import com from './component';
import Button from './Button/Button';
class HelloWorld extends Component {
  render(){
    return (
      <div>Hello React</div>
    )
  }
}
//
let root=document.getElementById('app');
// render(<HelloWorld />, root);
render(<Button/>,root);
com();
