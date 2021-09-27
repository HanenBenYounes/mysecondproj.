

const Validation = (values) => {
    let errors={};
    if (!values.fullname){
        errors.fullname="Name required"
    }
    if (!values.email){
        errors.email="email required"
    }
    if (!values.password){
        errors.password="Password is required"
    }

    return errors;
    
}

export default Validation
