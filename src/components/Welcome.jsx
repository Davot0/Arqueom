import { NavLink, useNavigate} from "react-router-dom"


export const Welcome = () => {
  return (
    <>
        <header className="bg-purple-600 text-white p-6 text-6xl">
            <h1>Bienvenido al PortFoleo Dis</h1>
        </header>

        <nav>
            <ul>
                <li className="m-3 text-xl">
                    <NavLink to="/carol">
                        Carol Juliana Acevedo Cano
                    </NavLink>
                </li>
                <li className="m-3 text-xl">
                    <NavLink to="/estefania">
                        Estefanía Díaz Lopera
                    </NavLink>
                </li>
                <li className="m-3 text-xl">
                    <NavLink to="/jhojan">
                        Jhojan Sánchez Arango
                    </NavLink>
                </li>
                <li className="m-3 text-xl">
                    <NavLink to="/manuela">
                        Manuela Cardona Cartagena
                    </NavLink>
                </li>
            </ul> 
        </nav>

        

    </>
  )
}

