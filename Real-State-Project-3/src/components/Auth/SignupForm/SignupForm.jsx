import { useState } from 'react'
// import { useNavigate } from 'react-router'
import axios from 'axios'
import './Signup.css'; 

function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:3000/auth/signup', {
        username,
        password
      })
      alert('User registered, please login')
      navigate('/login')
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            placeholder="Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input 
            placeholder="Password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Sign Up</button>
      </form>
    </div>
  )
}
export default  SignUp