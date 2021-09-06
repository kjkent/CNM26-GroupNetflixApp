
import React from 'react';
import { Link } from 'react';

function SignInFormSuccess() {
    return (
        <div>
            <h1>Hello World</h1>
            <button>
                <Link to="/profile">You have logged in. Click Here to search for movies!</Link>
            </button>
        </div>
    )
}

export default SignInFormSuccess;
