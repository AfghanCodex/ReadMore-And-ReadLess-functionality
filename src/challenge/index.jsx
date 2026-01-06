import { use, useState } from "react";
import "./style.css";

const App = ({ size, color }) => {
  let ReadText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto hic temporibus assumenda. Eveniet debitis, ducimus architecto quisquam deleniti odio sunt, voluptate beatae dolores fugiat animi officiis quidem molestias blanditiis adipisci.";

  const [Text, SetText] = useState(ReadText);
  const [Button, setButton] = useState("ReadLess");

  function handleButton(e) {
    e.preventDefault();
    if (Button === "ReadLess") setButton("ReadMore");
    if (Button === "ReadMore") setButton("ReadLess");

    if (Button === "ReadLess") {
      SetText(ReadText.split("").splice(0, size).join(""));
    }
    if (Button === "ReadMore") {
      SetText(ReadText);
    }
  }

  return (
    <div>
      <p>{Text}</p>
      <a href="index.jsx" onClick={handleButton}>
        {Button}
      </a>
    </div>
  );
};

export default App;
