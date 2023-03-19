import { useDispatch } from "react-redux";
import { register } from "redux/authForm/authOperations";
import { Button, Input, Text, Box } from "@chakra-ui/react";


const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
    
    e.preventDefault();
    const form = e.currentTarget;
        
    dispatch(register({
       name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
    }));
     form.reset();
    };
    
    return (
    <Box as="form" p="4" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <Text fontSize="large"> Name </Text>
                <Input type="text"
                    name="name"
                    placeholder="Write your name"
                    maxWidth='2xl'
                />
        </label>
        <label htmlFor="email">
        <Text fontSize="large"> E-mail </Text>
                <Input
                    type="email"
                    name="email"
                    placeholder="Write your email"
                    maxWidth='2xl'
                />
        </label>
        <label htmlFor="password">
        <Text fontSize="large"> Password </Text>
                <Input type="password"
                    name="password"
                    placeholder="Write your password"
                    maxWidth='2xl'
                />
        </label>      
        <Button variant='solid'
                colorScheme='purple'
                size='sm'
                fontSize="xl"
                mt="2"
                display='block'
                type="submit">Sign up</Button>     
    </Box>
    );
}

export default RegisterForm;