import { Link } from 'react-router'
import './NavBar.css'
const NavBar = () => {
    return (
        <>
            <Link to='/areas' className='navbar'>Areas List</Link>
            <Link to='/AreaForm' className='navbar'>Create Area</Link>
            <Link to='/property'className='navbar'>Property List</Link>
            <Link to='/property/new'className='navbar'>Create property</Link>
        </>
    )
}
export default NavBar