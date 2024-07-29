import { Link, NavLink } from "react-router-dom"


export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        {/* <li className="nav-item"> <Link to="/" className="nav-link px-lg-3 py-3 py-lg-4" >Home</Link> </li>
                        <li className="nav-item"> <Link to="/about" className="nav-link px-lg-3 py-3 py-lg-4" >About</Link> </li>
                        <li className="nav-item"> <Link to="/blog" className="nav-link px-lg-3 py-3 py-lg-4" >Blog</Link> </li>
                        <li className="nav-item"> <Link to="/contact" className="nav-link px-lg-3 py-3 py-lg-4" >Contact</Link> </li> */}
                        <li className="nav-item">
                        <NavLink to="/"  className={({ isActive }) => isActive ? "nav-link px-lg-3 py-3 py-lg-4 alink" :
                         "nav-link px-lg-3 py-3 py-lg-4 link"}>Home </NavLink>
                         </li>
                         <li className="nav-item">
                         <NavLink to="/about"  className={({ isActive }) => isActive ? "nav-link px-lg-3 py-3 py-lg-4 alink" :
                          "nav-link px-lg-3 py-3 py-lg-4 link"}>About </NavLink>
                          </li>
                        <li className="nav-item">
                        <NavLink to="/blog"  className={({ isActive }) => isActive ? "nav-link px-lg-3 py-3 py-lg-4 alink" :
                         "nav-link px-lg-3 py-3 py-lg-4 link"}>Blog </NavLink>
                         </li>
                         <li className="nav-item">
                         <NavLink to="/contact"  className={({ isActive }) => isActive ? "nav-link px-lg-3 py-3 py-lg-4 alink" :
                          "nav-link px-lg-3 py-3 py-lg-4 link"}>Contact </NavLink>
                          </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        
        
    </>
  )
}
