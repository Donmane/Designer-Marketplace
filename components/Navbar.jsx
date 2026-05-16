// import { Menu } from "lucide-react";
// import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    localStorage.removeItem("role");
  }
  // const toggleMenuFunction = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Designers", path: "/featured-designers" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <header className=" bg-blough text-white p-4 flex items-center justify-between">
        <h1 className="text-3xl">Designora</h1>

        <ul className="flex items-center gap-20 text-md font-medium cursor-pointer">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        
        {user ? (
          <>
            <span>Welcome {user.name}</span>
            <button onClick={handleLogout} className="bg-red-500 p-2 rounded-xl text-white font-medium hover:bg-red-600">
              Logout
            </button>
          </>
        ) : (
          <div className="flex gap-4 items-center">
            <Link to="/continueclient">
              <button className="bg-black p-4 rounded-xl text-white font-medium hover:bg-gray-600">
                Continue as Client
              </button>
            </Link>

            <Link to="/continuedesigner">
              <button className="bg-white p-4 rounded-xl text-black font-medium hover:bg-gray-500">
                Continue as Designer
              </button>
            </Link>
          </div>
        )}
      </header>

      {/* mobile menu button */}
      {/* <div className="flex">
        <Menu
          onClick={toggleMenuFunction}
          className="md:hidden absolute top-4 right-4 cursor-pointer"
          size={30}
        />
      </div> */}

      {/* mobile nav */}
      {/* {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 p-4 bg-black">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="text-black p-4 bg-white rounded-xl cursor-pointer"
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )} */}
    </>
  );
}

export default Navbar;