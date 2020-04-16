import React from "react";
import "./app.scss";
import Navbar from "./components/Navbar";
import TourList from "./components/TourList";
class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
