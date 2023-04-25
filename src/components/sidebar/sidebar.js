import { faCompass, faHome, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import logo from './logo.png'
export default  function SideBar()
{

    return (
        <aside>
            <div className='logo'>
<img src={logo} width={200}/>
            </div>
            <div className="menu">
                <div className="menuitem">
                    <NavLink>
                    <i><FontAwesomeIcon icon={faHome} /> </i> home

                    </NavLink> 
                </div>
                <div className="menuitem" >
                    <Link>
                    <i><FontAwesomeIcon icon={faSearch} /></i>search
                    </Link>
                   </div>
                <div className="menuitem">
                    <Link>
                    <i><FontAwesomeIcon icon={faCompass} /></i>explore

                    </Link>
                    </div>
                <div className="menuitem">
                    <Link>
                    <i><FontAwesomeIcon icon={faMessage} /></i>notifications
                    </Link>
                    </div>

            </div>
        </aside>
    )
}