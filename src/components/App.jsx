import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojis) => {
          return (
            <Entry
              key={emojis.id}
              imoji={emojis.emoji}
              name={emojis.name}
              description={emojis.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
