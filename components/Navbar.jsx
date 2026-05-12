import { Link } from "react-router-dom";
function Navbar() {
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

        <div className="flex gap-4 items-center">
          <button className="bg-black p-4 rounded-xl text-white font-medium">
            Continue as Client
          </button>
          <button className="bg-white p-4 rounded-xl text-black font-medium">
            Continue as Designer
          </button>
        </div>
      </header>
    </>
  );
}
export default Navbar;
