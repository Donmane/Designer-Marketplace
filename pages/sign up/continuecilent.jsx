import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Continueclient({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
const handleSubmit = () => {
  const user = {
    name,
    email,
    role: "client"
  };

  localStorage.setItem("user", JSON.stringify(user));
  setUser(user); 

  navigate("/");
};


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Continue as Client</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={!name || !email}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Continueclient;
