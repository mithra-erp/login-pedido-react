import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner, Link } from '@chakra-ui/react';

import { useState } from 'react';
import { Input } from '../components/Form/Input';
 
export default function UserList() {
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    

    console.log(product);
    console.log(quantity);
    

    

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    const handleSetOrder = () => {

        if(!product) {
            return;
        }
        const newOrder = {
            id: Math.random(),
            product: product,
            quantity: quantity,
        }
        setOrder(oldstate => [...oldstate, newOrder]);
        
    }
    console.log(order);

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/users').then(response => response.json())
    //     .then(data => console.log(data))
    // })
    return (
        <Box>

            <Flex
            w="100%"
            my="6"
            maxWidth={1480}
            mx="auto"
            px="6"
            direction="column"
            >

                <Box flex="1" borderRadius={8} bg="gray.200" p="8">
                    <Flex
                    mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Adicionar produto
                        </Heading>

                        
                    </Flex>
                    <Flex>
                        <Box w="80%" mr="2">
                            <Input type="text" label="Produto" name="product" value={product} onChange={(event) => setProduct(event.target.value)} />
                        </Box>
                        <Box w="60%" ml="2">
                            <Input type="text" label="Quantidade" name="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                        </Box>
                        <Box ml="2" mt="2rem" >
                            <Button fontSize={["0.8rem","1rem"]} colorScheme="blue" color="white" size="lg" fontWeight={["normal","bold"]} onClick={handleSetOrder} _hover={{
                                bg: "blue.600"
                            }} w={["70%", "100%"]}>{!isWideVersion ? 'Adicionar': 'Adicionar produto'}</Button>
                        </Box>
                    
                    </Flex>
                    
                </Box>

                        <Box flex="1" borderRadius={8} bg="gray.200" p="8" mt="10">
                            <Heading fontSize="1.4rem" textTransform="uppercase" mt="10" mb="4">
                            Lista de produtos
                            </Heading>
                            <Table colorScheme="blue" variant="striped" size="md">

                            <Thead>
                                <Tr>
                                    <Th>
                                        <Text>Produto</Text>
                                    </Th>
                                    <Th>
                                        <Text>Quantidade</Text>
                                    </Th>
                                    
                                </Tr>
                            </Thead>
                            <Tbody>
                                {order.map(order => {
                                    return (
                                        <Tr key={order.id}>
                                            <Td>
                                                <Box>
                                                    <Text fontWeight="bold">{order.product}</Text>
                                                </Box>
                                            </Td>
                                            <Td>{order.quantity}</Td> 
                                        </Tr>
                                    );
                                })}
                            </Tbody>
                            
                            </Table>
                            
                        </Box>
            </Flex>
        </Box>
    );
}