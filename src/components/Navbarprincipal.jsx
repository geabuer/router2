import { NavLink } from "react-router-dom"
import {Navbar} from "react-bootstrap"


const Navbarprincipal = () => {
  return (
    <Navbar className="d-flex justify-content-between px-5 bg-warning "  >
      <div>
        <NavLink className={({isActive})=>(isActive ? "active me-3" : "me-3")} to="/">
          Home
          </NavLink>
          <NavLink className={({isActive})=>(isActive ? "active me-3" : "me-3")} to="/Pokemones">
          Pokemones
          </NavLink>
      </div>
      
    </Navbar>
  )
}

export default Navbarprincipal