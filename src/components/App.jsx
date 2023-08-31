import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map((emo, index) => (
      <Emoji
        emoji={emo.emoji}
        name={emo.name}
        meaning={emo.meaning}
        id={emo.id}
        key={index}
      />
      <></>
      ))}
      </dl>
    </div>
  );
}

export default App;
