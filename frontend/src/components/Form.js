import React, {useState} from 'react'; 
import Login from "./Login";
// import LoginSuccess from "./LoginSuccess";
import SignUpForm from './SignUpForm';
import SignUpFormSuccess from './SignUpFormSuccess';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
    const submitForm = () => {
        setFormIsSubmitted(true);
    }; 

    return (
        <div>
            { !formIsSubmitted ? <SignUpForm submitForm={submitForm}/> : <SignUpFormSuccess/>}
            <p>form page</p>
        </div>
    )    
};

export default Form;
