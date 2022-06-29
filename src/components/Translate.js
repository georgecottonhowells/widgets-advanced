//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM;

import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  { label: "Tagalog", value: "tl" },
  { label: "French", value: "fr" },
];

const label = "Select a language";

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  console.log("language", language);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>

      <Dropdown
        label={label}
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
