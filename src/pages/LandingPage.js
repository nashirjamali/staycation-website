import React, { Component } from "react";
import Header from "parts/Header";

export default class LandingPages extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}
