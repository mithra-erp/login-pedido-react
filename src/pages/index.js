import { Flex, Button, Stack, } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';



const signInFormSchema = yup.object().shape({
  name: yup.string().required('Usuário obrigatório'),
  password: yup.string().required('Senha obrigatória'),
})

export default function Home() {
  

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
  }

  const { errors } = formState;

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.200"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input name="user" type="text" label="Usuário" {...register('name')} error={errors.name}/>            
            <Input name="password" type="password" label="Senha" {...register('password') } 
            error={errors.password}
            />            
          </Stack>

          <Button type="submit" mt="6" colorScheme="blue" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  );
}
