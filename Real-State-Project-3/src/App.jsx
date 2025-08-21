import {jwtDecode} from 'jwt-decode'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'


//Auth
import LoginForm from './components/Auth/LoginForm/LoginForm'
import SignUp from './components/Auth/SignupForm/SignupForm'
import LogoutButton from './components/Auth/LogoutButton/LogoutButton'
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/Auth/ProtectedRoute/ProtectedRoute'
import PropertyList from "./components/PropertyList/propertyList";
import PropertyForm from "./components/PropertyForm/propertyForm";

//Area
import AreasList from './components/AreaList/AreaList'
import AreaForm from './components/AreaForm/AreaForm'
import PropertyDetails from './components/PropertyDetails/PropertyEdit'


function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const[property, setProperty]= useState([])
  const[editProperty, setEditProperty] = useState(null)
  const[formIsShown, setFormIsShown]= useState(false)
  
  const handleShowForm=()=>{
    setFormIsShown(true)

  }

  const setEditPropertyHandler = (property)=>{
    setEditProperty(property)
    setFormIsShown(true)
  }

  function handleLogin(newToken) {
    setToken(newToken)
  }

  function handleLogout() {
    setToken(null)
    localStorage.removeItem('token')
  }

  if (token) {
    const decodedToken = jwtDecode(token)
    console.log(decodedToken)
  }

  return (
    <>
    <Router>
      <div>
        {token ? <LogoutButton onLogout={handleLogout} /> : null}
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Area */}
  
          <Route path="/AreaForm" element={<AreaForm />} />
          <Route path="/areas" element={<AreasList />} />
          <Route path="/property" element={<PropertyList property={property} setProperty={setProperty} setEditProperty={setEditPropertyHandler}/>}/>
          <Route path="/property/new" element={<PropertyForm editProperty={editProperty} setEditProperty={setEditProperty} setFormIsShown={setFormIsShown} setProperty={setProperty} AreasList={AreasList}/>}/>
          <Route path="/property/:propertyId" element={<PropertyDetails property={property} setProperty={setProperty} setFormIsShown={setFormIsShown}/>}></Route>

        
        </Routes>
      </div>
    </Router>
    {/* <button onClick={handleShowForm}>New Property</button>
    {formIsShown ? <PropertyForm editProperty={editProperty} setEditProperty={setEditProperty} setFormIsShown={setFormIsShown} setProperty={setProperty}/> :null} */}

    </>
  )
}
export default App
