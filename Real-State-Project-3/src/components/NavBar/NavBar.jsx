import { Link } from 'react-router'

const NavBar = () => {
    return (
        <>
            <Link to='/areas'>Areas List</Link>
            <Link to='/AreaForm'>Create Area</Link>
        </>
    )
}
export default NavBar