/* check if any errors in values typed by the user */ 
const validation= (values) => {

    let errors={}; 

    /* if email empty give a message */
    if(!values){
        errors.email ="Email is required."
     /* if email doesn't contain + and . then email invailid  */   
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email ="Email is invalid."
    }

     /* if password empty give a message */
    if(!values.password){
        errors.password= "Password is required"
    /* if password less than 5 characters invaild */
    } else if (values.password.length < 5) {
        errors.password ="Password must be more than five characters."
    }

    return errors;
}; 

export default validation; 
