import React, { useState } from "react";
import axios from "axios";

function App70(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState([]);

  const handleClick = () => {
    axios.postForm("/api/main8/sub4", {
      name: name,
      attached: file,
    });
  };

  return (
    <div>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input type="file" multiple onChange={(e) => setFile(e.target.files)} />
      <br />
      <button onClick={handleClick}>전송</button>
    </div>
  );
}

export default App70;
