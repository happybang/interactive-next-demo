import React, { Component } from "react";

import Button from 'antd/lib/button';  // 加载 JS
import {serverMethod,clientMethod} from "../directors/index"
class About extends Component {// Maybe this is PageComponent
  constructor(props) {
    debugger
    super(props);
    this.state={
        v1:'hahaha'
    }
  }
  getState(){
    return this.state;
  }
  lettt(){
    return 2;
  }
  // getInitialProps(){
  //   debugger;
  //   console.log(this.lettt());
  // }
  @clientMethod
  alertSomeThing(){
    console.log(this.state);
    //do something at client ,you can get client state
  }

  @serverMethod
  onClick(){
  
  }

  render() {
    this.state={
      v1:'nihao'
    }
    return  (<div>
        <Button type="primary" onClick={this.onClick.bind(this)}>{this.state.v1}</Button>
        <Button onClick={this.alertSomeThing.bind(this)}>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>)
  }
}

export default About;
