import { Link } from 'react-router'

const NavBar = () => {
    return (
        <>
            <Link to='/areas'>Areas List</Link>
            <Link to='/AreaForm'>Create Area</Link>
            <Link to='/property'>Property List</Link>
            <Link to='/property/new'>Create property</Link>
        </>
    )
}
export default NavBar