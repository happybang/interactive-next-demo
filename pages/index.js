import React, { Component } from "react";

import Button from "antd/lib/button"; // 加载 JS
import { serverMethod, clientMethod } from "../directors/index";
class About extends Component {
  // Maybe this is PageComponent
  constructor(props) {
    super(props);
    this.state = {
      v1: "i am default server",
      v2: "i am default client",
      value: 0
    };
  }
  getState() {
    return this.state;
  }
  lettt() {
    return 2;
  }
  // @clientMethod
  alertSomeThing() {
    this.setState({
      value: this.state.value + 1,
      v2: "i am client side change"
    });
    //do something at client ,you can get client state
  }
  @serverMethod
  onClick() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let value = this.state.value - 1;
        this.setState({
          value: value,
          v1: "i am from server side"
        });
        resolve();
      }, 2000);
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} />
        <br />
        <Button type="primary" onClick={this.onClick.bind(this)}>
          {this.state.v1}
        </Button>
        <Button onClick={this.alertSomeThing.bind(this)}>
          {this.state.v2}
        </Button>
      </div>
    );
  }
}

export default About;
