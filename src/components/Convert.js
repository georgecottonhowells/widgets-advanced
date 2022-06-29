import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    console.log("useEffect [debouncedText]");
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  useEffect(() => {
    console.log("useEffect [language, text]");
    if (!text) {
      setDebouncedText(text);
    } else {
      const timeoutId = setTimeout(() => {
        console.log("setDebouncedText");
        setDebouncedText(text);
      }, 1000);
      return () => {
        console.log("cleanup called");
        clearTimeout(timeoutId);
      };
    }
    return;
  }, [text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};
export default Convert;
