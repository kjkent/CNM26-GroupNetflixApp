import { useState, useEffect } from "react";
import SignInForm from './SignInForm'
import SignInFormSuccess from "./SignInFormSuccess"

function LoginPage() {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    }; 
    return (
       <>
        { !formIsSubmitted ? <SignInForm submitForm={submitForm}/> : <SignInFormSuccess/>}
       </>
    )
}




export default LoginPage;
