import React, {useState, useEffect} from 'react'
import Validation from "./Validation"


const SignupForm = () => {
    const [values, setValues] = useState({
        fullname:'',
        email:'',
        password:'',

    });
    const [errors, setErrors]=useState({});
    const [dataIsCorrect, setDataIsCorrect]= useState(false);
    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        });
    };
    const handleFormSubmit= (event)=>{
        event.preventDefault ();
        setErrors(Validation(values));
        setDataIsCorrect(true);
    };
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);

        }

    }, [errors]);
    return (
        <div className="container">
            <div className= "app-wrapper">
                <div>
                    <h2 className="title"> Create account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name" >
                        <label className="label">Full Name</label>
                        <input className="input" type="text" name="fullname" value ={values.fullname} onChange={handleChange}/>
                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
                    <div className="email">
                        <label className="email" >Email</label>
                        <input className="input" type="text" name="email" value ={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="password" >Password</label>
                        <input className="input" type="text" name="password" value ={values.password} onChange={handleChange}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>

            
        </div>
    );
};

export default SignupForm
