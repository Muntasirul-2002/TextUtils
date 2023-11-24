import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleClearClick = () => {
    console.log("Text is clear" + text);
    alert("Are you sure?");
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Changed");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log(" Text Copied Successfully");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    console.log("Removed extra spaces");
    props.showAlert("Removed extra spaces!", "success");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={handleCopy}
        >
          Copy text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words, {text.length} characters
          </b>
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes read
          </b>
        </p>
        <h1>Preview Here...</h1>
        <h6>{text}</h6>
      </div>
    </>
  );
}
