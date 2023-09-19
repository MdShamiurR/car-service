import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";


const Navbar = () => {
  const navMenu= <>
  <li className="rounded-md"><Link to={'/'}>Home</Link></li>
  <li className="rounded-md"><Link to={''}>About</Link></li>
  <li className="rounded-md"><Link to={''}>Services</Link></li>
  <li className="rounded-md"><Link to={''}>Blog</Link></li>
  <li className="rounded-md"><Link to={''}>Contact</Link></li>

  </>
    return (
      <div className="navbar bg-base-100 h-24 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navMenu}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl"><img className="w-20" src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md btn-warning  ">Appointment</button>
      </div>
    </div>
    );
};

export default Navbar;


{/* <div className="navbar bg-base-100">
  <div className="navbar-start">
    
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> */}