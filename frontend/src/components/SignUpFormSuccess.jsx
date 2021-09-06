
import React from 'react';
import { Link } from "react-router-dom";

function SignUpFormSuccess() {
    return (
        <div>
            <p>Sign up form success</p>
            <Link to="./profile">Click her to start searching!</Link>
        </div>
    )
}

export default SignUpFormSuccess
