import React, { useState } from "react";
import "./styles.css";

var heading = "Fruit Basket";
var color = "#7F1D1D";
var fruitsDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "": ""
};
var reverseFruitsDictionary = {
  Grapes: "🍇",
  Melon: "🍈",
  Watermelon: "🍉",
  Tangerine: "🍊",
  Lemon: "🍋",
  Banana: "🍌",
  Pineapple: "🍍",
  Mango: "🥭",
  "Red Apple": "🍎",
  "Green Apple": "🍏",
  Pear: "🍐",
  Peach: "🍑",
  Cherries: "🍒",
  Strawberry: "🍓",
  "": ""
};
var fruitsList = Object.keys(fruitsDictionary);
export default function App() {
  // const [likeCount, setLikeCount] = useState(0);
  var [fruitInput, setFruitInput] = useState("");
  var [emojiMeaning, setEmojiMeaning] = useState("");

  function inputChangeHandler(event) {
    var val = event.target.value;
    var emoji = reverseFruitsDictionary[val];
    if (emoji === undefined) {
      emoji = "Please check the spelling of the fruit name.";
    }
    setFruitInput(emoji);
  }
  function emojiChangeHandler(event) {
    var val = event.target.value;
    var meaning = fruitsDictionary[val];
    if (meaning === undefined) {
      meaning = "Oops! We do not have this emoji in our database.";
    }
    setEmojiMeaning(meaning);
  }
  function emojiDisplayHandler(val) {
    var meaning = fruitsDictionary[val];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{heading}</h1>
      {/* <button onClick={likeClickHandler}>Like Me!</button> {likeCount} */}
      <div className="dis">
        Enter the name of the fruit you want an emoji for:
      </div>
      <input
        onChange={inputChangeHandler}
        placeholder="Enter the Fruit name here
"
      ></input>
      <div style={{ fontSize: "1.8rem" }} className="output">
        {" "}
        {fruitInput}{" "}
      </div>
      <div className="dis">Enter the fruit emoji to be translated here:</div>
      <input
        onChange={emojiChangeHandler}
        placeholder="Enter the Fruit emoji here"
      ></input>
      <h2>
        <span
          style={{ backgroundColor: "yellow", color: "red" }}
          className="output"
        >
          {emojiMeaning}
        </span>
      </h2>

      <h3> Fruit emojis we know: </h3>
      {fruitsList.map(function (item) {
        return (
          <span
            onClick={() => emojiDisplayHandler(item)}
            className="emdis"
            style={{ fontSize: "2.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
