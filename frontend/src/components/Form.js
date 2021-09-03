import React, {useState} from 'react'; 
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";

function Form() {
    const [formIsSubmitted, setFormSubmitted] = useState(false);
    
    const submitForm = () => {
        setFormIsSubmitted(true);
    }; 

    return (
        <div>
            { !formIsSubmitted ? (
            <SignupForm submitForm={submitForm} />
            ) : (
            <SignupFormSuccess/>
            )}
        </div>
    );
};

export default Form
