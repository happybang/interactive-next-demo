import React, { Component } from "react";

import Button from 'antd/lib/button';  // 加载 JS
import serverMethod from "../directors/index"
class About extends Component {// Maybe this is PageComponent
  constructor(props) {
    debugger;
    super(props);
    this.state={
        v1:'hahaha'
    }
  }
  @clientMethod
  alertSomeThing(){
    //do something at client ,you can get client state
  }
  @serverMethod
  onClick(){
    //do something at server , you can get client state
    // to do 
    // 1。set state
    // invoke client Method
  }
  render() {
    return  (<div>
        <Button type="primary" onClick={this.onClick.bind(this)}>{this.state.v1}</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>)
  }
}

export default About;
