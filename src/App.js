import "./App.css";
import Divider from "./Divider";
import { useState } from "react";

function App() {
  const [userName, changeUserName] = useState("John Doe");
  const [userAddress, changeUserAddress] = useState("7 Potato Drive");
  const [userSummary, changeSummary] = useState(
    "Here are somethings about me.\n you should probably know some things. here are some words about me.\n wow ok words words."
  );

  const updateUserName = () => {
    changeUserName(document.querySelector("#userNameInput").value);
  };

  const updateUserAddress = () => {
    changeUserAddress(
      document
        .querySelector("#addressInput")
        .value.split("\n")
        .map(function (item) {
          return (
            <span>
              {item}
              <br />
            </span>
          );
        })
    );
  };

  const updateUserSummary = () => {
    changeSummary(
      document
        .querySelector("#summaryInput")
        .value.split("\n")
        .map(function (item) {
          return (
            <span>
              {item}
              <br />
            </span>
          );
        })
    );
  };

  return (
    <div className="mainContainer">
      <div className="inputDivContainer">
        <label for="userNameInput">Name</label>
        <input type="text" id="userNameInput" onChange={updateUserName} />
        <label for="userNameInput">Address</label>
        <textarea
          id="addressInput"
          rows="5"
          cols="25"
          onChange={updateUserAddress}
        ></textarea>


        <label for="summaryInput">Summary</label>
        <textarea
          id="summaryInput"
          rows="10"
          cols="40"
          onChange={updateUserSummary}
        ></textarea>
      </div>
      <div className="outputDivContainer">
        <h2 class="nameHeading">{userName}</h2>
        <Divider />
        <p class="userAddress">{userAddress}</p>
        <Divider />
        <div className="summaryDiv">
          <h2 className="leftHeading">Summary</h2>
          <p className="indentText"  >{userSummary}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
