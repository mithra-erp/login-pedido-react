import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';


const InputBase= ({name, label,error = null, ...rest}, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
            id={name}
            name={name}
            type="text" 
            focusBorderColor="blue.500"  
            bgColor="gray.400"
            variant="filled"
            _hover={{
                bgColor: "gray.500"
            }} 
            size="lg" 
            ref={ref}  
            {...rest}     
            />
            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage> 
            )}
        </FormControl>
    );
}

export const Input = forwardRef(InputBase);