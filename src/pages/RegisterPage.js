import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth-form/auth-operations";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleChange = ({ target: { name, value } }) => {
    // eslint-disable-next-line
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
        }
    };

const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
    };
    
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
        Name
            <input type="text" name="name" value={name} onChange={handleChange}/>
        </label>
        <label htmlFor="email">
        E-mail
            <input type="email" name="email" value={email} onChange={handleChange}/>
        </label>
        <label htmlFor="password">
        Password
            <input type="password" name="password" value={password} onChange={handleChange}/>
        </label>      
        <button type="submit">Sign up</button>     
    </form>
    );
}

export default RegisterPage;