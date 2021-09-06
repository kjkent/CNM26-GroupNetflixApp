
import { useState, useEffect } from "react";
const axios = require("axios");

const FormFunctions = (submitForm, validation) => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState ({});
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [dataIsCorrect, setDataCorrect] =useState(false); 

    const handleChange = (event) => {
        setValues({
        ...values,
        [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        /* sort errors if any */
        setErrors(validation(values));
        setDataCorrect(true);
        console.log(values.email)

        const user = {
            email: values.email,
            passwordHash: values.password
        }; 
        axios.post("http://localhost:80/user/addUser", user);
        console.log(user)
    };

    useEffect(()=> {
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        } 
    }, [errors]);

    return { handleChange, handleFormSubmit, values, errors }
};

export default FormFunctions;