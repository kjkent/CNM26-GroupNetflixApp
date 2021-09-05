
import React from 'react'
import validation from './validation';
import FormFunctions from "./formFunctions";

function SignUpForm({ submitForm }) {

    const { handleChange, handleFormSubmit, values, errors } = FormFunctions (submitForm, validation);

    // const [values, setValues] = useState({
    //     email: "",
    //     password: "",
    // });

    // const handleChange = (event) => {
    //     setValues({
    //     ...values,
    //     [event.target.name]: event.target.value,
    //     });
    // };

    return (
    //     <>
    //         <form>
    //     <h1 className="signin_title"> New? Sign up now </h1>
    //     <div className = "emailnew">
    //     <label className = "label"> Email </label>
    //      <input className="input" 
    //      type="email"
    //      name="email" 
    //      value={values.email}
    //      onChange={handleChange}
    //      /> 
    //      {errors.email && <p className="error"> {errors.email} </p>}
    //      </div> 

    //     <div className = "passwordnew">
    //     <label className = "label"> Password </label>
    //     <input className= "input" 
    //     type="password"
    //      name="password" 
    //      value={values.password}
    //      onChange={handleChange}
    //     />
    //     {errors.password && <p className="error"> {errors.password} </p>}
    //     </div> 

    //     <button className="submit" onClick={handleFormSubmit}>Sign up </button>
    //     </form> 
    //         {/* ---------------------------------------------------------------------------
    //            MERGE CONFLICT
              
    //            <h1 className="signin_title"> New? Sign up now </h1>
    //     <form> 
    //      <input placeholder="Email" type="email"/>
    //      <input placeholder="Password" type="password"/>
    //      <input placeholder="Retype Password" type="password"/>
    //      </form>
    //        <button className="signup_button">Sign up </button>
    //     ---------------------------------------------------------------------------  */}
        
    //     <div className ="resetpassword">
    //     <label className = "label"> Reset Password </label>
    //     </div>
     
    //   <input className="Reset Password" 
    //   type="password" 
    //   name="password" 
    //   value={values.password}
    //   onChange ={handleChange}
    //   /> 
    //     </>
        <div>
            <form>
                
            </form>
        </div>
    )
}

export default SignUpForm
