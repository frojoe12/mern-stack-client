import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData
  const onFormChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmitForm = async e => {
    e.preventDefault()
    console.log('success')
  }
  return (
    <>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmitForm}>
        <div className="form-group"></div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onFormChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onFormChange}
            minLength="6"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
        <p className="my-1">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </>
  )
}

export default Login
