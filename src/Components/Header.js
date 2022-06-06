import {Link, Outlet } from "react-router-dom"

function Header(){
    return(<>
    
 <nav className="navbar navbar-expand-sm bg-light">

<div className="container-fluid">
  
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link  className="nav-link" to="/addLesson">Add_Lesson</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/addStudent">Add_Student</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/students">All_Students</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/lessons">All_Lessons</Link>
    </li>
    
  </ul>
</div>

</nav>
<Outlet/>
</>)
}export default Header