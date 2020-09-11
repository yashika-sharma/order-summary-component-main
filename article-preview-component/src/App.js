import React from "react";
import "./App.css";
import avatar from "./article-preview-component-master/images/avatar-michelle.jpg";

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <div className="left" />
        <div className="right">
          <div>
            <p className="heading">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </p>
          </div>
          <div>
            <p className="body">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <div className="foot">
            <div className="left-foot">
              <img src={avatar} alt="avatar" className="avatar" />
              <div className="left-foot-data">
                <p>Michelle Appleton</p>
                <p>28 Jun 2020</p>
              </div>
            </div>

            <div>
              <ion-icon name="arrow-redo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
