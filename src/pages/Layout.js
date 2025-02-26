import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className=" navs">
   
      
            <Link to="/">Home</Link>
       
            <Link to="/projects">Projects</Link>
       
            <Link to="/contact">Contact</Link>
    
      
      </nav>



      <Outlet />
    </>
  )
};

export default Layout;