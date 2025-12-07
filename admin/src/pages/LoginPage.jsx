import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      Login Page.
      <div>
        <SignIn />
      </div>
    </div>
  )
}

export default LoginPage
