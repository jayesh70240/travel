import React from "react";
import "./Main.css";
function MainContent() {
  return (
    <div
      className="d-flex align-items-center justify-content-center m-0"
      style={{ height: "100vh" }}
    >
      <div className="container text-center text-white m-0">
        <p>ADVENTURE AWAITS</p>
        <h3>What are you waiting for?</h3>
        <div className="d-flex align-items-center justify-content-center my-3">
          <button className="btn btn-secondary  mx-2">Get Started</button>
          <button className="btn btn-secondary mx-2">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
}
export default MainContent;
