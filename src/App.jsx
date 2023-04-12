import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CryptoJS from "crypto-js";

function App() {
  const [message, setMessage] = useState("");
  const [enc, setEnc] = useState("");
  const [password, setPassword] = useState("testPassword");
  const [dec, setDec] = useState(null);
  const decryptMessage = () => {
    const decrypted = CryptoJS.AES.decrypt(enc, password);
    setDec(decrypted);
  };
  const encryptMessage = () => {
    const encrypted = CryptoJS.AES.encrypt(message, password);

    setEnc(encrypted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    encryptMessage();
  };

  const handleDecrypt = () => {
    decryptMessage();
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

      <p>{enc.toString()}</p>
      <button onClick={handleDecrypt}>Decrypt</button>
      {dec && <p>{dec.toString(CryptoJS.enc.Utf8)}</p>}
    </div>
  );
}

export default App;
