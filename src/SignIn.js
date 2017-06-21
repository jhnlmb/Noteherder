import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
           
             }


    return (
        <div>
        <button className="SignIn"
            onClick={() => authenticate(githubProvider)}
        >
            Sign In with GitHub
        </button>
         <button className="SignIn"
            onClick={() => authenticate(googleProvider)}
        >
            Sign In with Google
        </button>
        </div>
    )

}

export default SignIn