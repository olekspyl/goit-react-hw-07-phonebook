import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth-form/auth-operations";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            }
    };

const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({email, password}))
    setEmail('');
    setPassword('');
  };

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">
        E-mail
            <input type="email" name="email" value={email} onChange={handleChange}/>
        </label>
        <label htmlFor="password">
        Password
            <input type="password" name="password" value={password} onChange={handleChange}/>
        </label>      
          
                <button type="submit">Log in</button>
        
    </form>
    );
}

export default LoginPage;