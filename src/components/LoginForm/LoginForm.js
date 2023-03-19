import { useDispatch } from "react-redux";
import { login } from "redux/authForm/authOperations";
import { Input, Button, Text, Box } from '@chakra-ui/react'

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(login({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset();
    };

    return (
        <Box as="form" p="4" onSubmit={handleSubmit}>
            <label htmlFor="email">
                <Text fontSize="large"> E-mail </Text>
                <Input as="input"
                    type="email"
                    name="email"
                    maxWidth='3xl'
                    placeholder="Write your email"/>
            </label>
            <label htmlFor="password">
                <Text fontSize="large"> Password </Text>
                <Input as="input"
                    type="password"
                    name="password"
                    maxWidth='3xl'
                    placeholder="Write your password" />
            </label>
            <Button as="button"
                variant='solid'
                colorScheme='purple'
                size='sm'
                fontSize="xl"
                mt="2"
                display='block'
                type="submit">Log in</Button>
        
        </Box >
    );
};

export default LoginForm;