import React, { useState, useEffect } from "react";
import CharA from "./characters/CharA";
import CharB from "./characters/CharB";
import CharH from "./characters/CharH";

interface Props {
  char: typeof options[number];
}

const options = ["A", "B"] as const;

const Character = (props: Props) => {
  const [character, setCharacter] = useState<React.ReactElement>(<div />);

  useEffect(() => {
    if (props.char === "A") {
      setCharacter(<CharA />);
    } else if (props.char === "B") {
      setCharacter(<CharB />);
    } else if (props.char === "H") {
      setCharacter(<CharH />);
    } else {
      setCharacter(<div>Wrong character again</div>);
    }
  }, []);

  return <div>{character}</div>;
};

export default Character;
