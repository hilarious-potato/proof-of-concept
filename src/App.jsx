import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CryptoJS from "crypto-js";

function App() {
  const [message, setMessage] = useState("");
  const [enc, setEnc] = useState("");
  const [password, setPassword] = useState("testPassword");

  const [count, setCount] = useState(0);

  const encryptMessage = () => {
    const encrypted = CryptoJS.AES.encrypt(message, password).toString();

    setEnc(encrypted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    encryptMessage();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Message
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </label>
        <button>Encrypt</button>
      </form>

      <p>{enc}</p>
    </div>
  );
}

export default App;
