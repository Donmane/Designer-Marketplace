import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Continuedesigner({ setUser }) {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const navigate = useNavigate();
 const handlesubmit = (e) =>{
  e.preventDefault()
  const user = {
    role : "designer",
    name,
    email,
  };
  console.log("Saving user", user);
  
  localStorage.setItem("user", JSON.stringify(user))
  setUser(user);
  console.log("Saved in liocalStorage", localStorage.getItem("user"));
  
  navigate("/")
 }
  return (
    <>
    <div>
      <form onSubmit={handlesubmit}>
        <h1>Continue as Designer</h1>
        <input type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} />

        <input type="email"
         placeholder="Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)} />

         <button>Submit</button>

      </form>
    </div>
    </>
  )
}

export default Continuedesigner