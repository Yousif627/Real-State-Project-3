import {jwtDecode} from 'jwt-decode'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'


//Auth
import LoginForm from './components/Auth/LoginForm/LoginForm'
import SignUp from './components/Auth/SignupForm/SignupForm'
import LogoutButton from './components/Auth/LogoutButton/LogoutButton'
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/Auth/ProtectedRoute/ProtectedRoute'

//Area
import AreasList from './components/AreaList/AreaList'
import AreaForm from './components/AreaForm/AreaForm'


function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

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


        </Routes>
      </div>
    </Router>
  )
}
export default App