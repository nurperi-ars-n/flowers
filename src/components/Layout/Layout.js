import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RouteContent from "../../Routes/RouteContent";
import "../../App.css";

export default function Layout() {
  return (
    <div className="App">
      <div>
        <Header />
        <div className="wrapper">
          <RouteContent />
        </div>
        <Footer />
      </div>
    </div>
  );
}
