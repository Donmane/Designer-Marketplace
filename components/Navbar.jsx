import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [role, setRole] = useState(() =>{
    return localStorage.getItem("role")
  })
  useEffect(() =>{
    if (role) {
      localStorage.setItem("role",role)
    }else{
      localStorage.removeItem("role")
    }
  })
  function switchRole() {
    setRole(null)
    localStorage.removeItem("role")
  }
  
  return (
    <>
      <header className="bg-blough text-white p-4 flex items-center justify-between">
        <h1 className="text-3xl">Designora</h1>

        <ul className="flex items-center gap-20 text-md font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./featured-designers">Designers</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        {role === null && (
          <>
            <div className="flex gap-4 items-center">
          <button className="bg-black p-4 rounded-xl text-white font-medium hover:bg-gray-600" onClick={() => setRole("Client")}>
            Continue as Client
          </button>
          <button className="bg-white p-4 rounded-xl text-black font-medium hover:bg-gray-500" onClick={() => setRole("Designer")}>
            Continue as Designer
          </button>
        </div>
          </>
        )}


        {role === "Client" && (
          <>
          <h2>Welcome Client</h2>
          <button onClick={switchRole}> Switch Role</button>
          </>
        )}
        {role === "Designer" && (
          <>
          <h2>Welcome Designer</h2>
          <button onClick={switchRole}>Switch Role</button>
          </>
        )}
      </header>
    </>
  );
}
export default Navbar;
