import React, { useEffect, useState } from "react";

export const TypingDescription = ({ text, className = "" }) => {
  const [displayed, setDisplayed] = useState("");
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    let i = 0;
    let timeoutId;
    setDisplayed("");
    setShowCaret(true);
    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        timeoutId = setTimeout(type, 35);
      }
    };
    if (displayed !== text) {
      type();
    }
    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <span className={className} style={{wordBreak: "break-word", whiteSpace: "normal"}}>
  {displayed}
  <span style={{
    display: "inline-block",
    width: "1ch",
    color: "seagreen",
    animation: "blink-caret 0.7s step-end infinite",
    borderRight: "2px solid seagreen"
  }}>
    &nbsp;
  </span>
</span>
  );
};
