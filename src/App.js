import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}
