import React, { Component } from "react";

import Button from 'antd/lib/button';  // 加载 JS
import {serverMethod,clientMethod} from "../directors/index"
class About extends Component {// Maybe this is PageComponent
  constructor(props) {
    super(props);
    this.state={
        v1:'i am default '
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
  // @clientMethod
  alertSomeThing(){
    console.log(this.state);
    this.setState({
      v1:"i am client"
    })

    //do something at client ,you can get client state
  }

  @serverMethod
  onClick(){
    this.setState({
      v1:"i am come from server"
    });
  }

  render() {
    return  (<div>
        <Button type="primary" onClick={this.onClick.bind(this)}>{this.state.v1}</Button>
        <Button onClick={this.alertSomeThing.bind(this)}>alertSomeThing</Button>
      </div>)
  }
}

export default About;
