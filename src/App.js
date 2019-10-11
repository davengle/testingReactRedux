import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" />
        </section>
      </div>
    );
  }
}
